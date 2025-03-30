import "./App.css";
import { DocumentCard } from "./components/DocumentCard/DocumentCard";
import { Header } from "./components/Header/Header";

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
      <DocumentCard
        image={"image"}
        title={"Employee Handbook"}
        type={"type"}
        date={"date"}
      />
    </>
  );
}

export default App;
