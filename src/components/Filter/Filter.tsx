import { IDocumentDetails } from "../ViewAllFiles/ViewAllFiles.types";
import "./Filter.css";
import { IFilter } from "./Filter.types";

export const Filter = ({ setFilteredData, setIsFiltering, data }: IFilter) => {
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFiltering(true);

    const form = event.target as HTMLFormElement;
    const filterValue = (
      form.elements.namedItem("filter") as HTMLInputElement
    ).value
      .trim()
      .toLowerCase();
    let matches: IDocumentDetails[] = [];

    data.forEach((file) => {
      if (
        file.type !== "folder" &&
        file.name.toLowerCase().includes(filterValue)
      ) {
        matches.push(file);
      }

      if (file.type === "folder" && file.files) {
        matches = [
          ...matches,
          ...(file.files as IDocumentDetails[]).filter((f) =>
            f.name.toLowerCase().includes(filterValue)
          ),
        ];
      }
    });

    setFilteredData(matches);
  };

  const handleClear = () => {
    const inputField = document.getElementById("filter-field");
    if (inputField instanceof HTMLInputElement) {
      inputField.value = "";
    } else {
      return;
    }
    setIsFiltering(false);
    setFilteredData([]);
  };

  return (
    <div className="filter-fields">
      <form onSubmit={handleSubmitForm}>
        <div className="filter-container">
          <label htmlFor="filter">Filter</label>
          <input
            aria-label="filter"
            type="text"
            id="filter-field"
            name="filter"
            placeholder="Find file..."
            className="filter-field"
            required
          />
          <button type="submit" className="search-button">
            <img
              src="/assets/magnifying-glass.svg"
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>
      </form>
      <button onClick={handleClear} className="search-button clear">
        <img
          src="/assets/clear-filters.svg"
          alt="clear"
          className="search-icon"
        />
      </button>
    </div>
  );
};
