import "./App.css";
import dataJson from "./data.json";
import { Header } from "./components/Header/Header";
import { ViewAllFiles } from "./components/ViewAllFiles/ViewAllFiles";
import { Filter } from "./components/Filter/Filter";
import { useState } from "react";

function App() {
  const [data] = useState(dataJson);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  let content = <ViewAllFiles data={data} />;
  if (isFiltering) {
    content =
      filteredData.length > 0 ? (
        <ViewAllFiles data={filteredData} />
      ) : (
        <div>No results found</div>
      );
  }
  return (
    <>
      <Header />
      <Filter
        data={data}
        setFilteredData={setFilteredData}
        setIsFiltering={setIsFiltering}
      />
      {content}
    </>
  );
}

export default App;
