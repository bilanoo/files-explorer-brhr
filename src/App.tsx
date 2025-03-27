import "./App.css";
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
    </>
  );
}

export default App;
