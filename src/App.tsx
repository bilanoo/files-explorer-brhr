import "./App.css";
import data from "./data.json";
import { Header } from "./components/Header/Header";
import { ViewAllFiles } from "./components/ViewAllFiles/ViewAllFiles";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <form>
          <div className="filter-container">
            <label htmlFor="filter">Filter</label>
            <input
              aria-label="filter"
              type="text"
              id="filter-field"
              name="filter"
              placeholder="Find file..."
              className="filter-field"
            />
          </div>
        </form>
      </div>
      <ViewAllFiles data={data} />
    </>
  );
}

export default App;
