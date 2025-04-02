import "./NoResultsFound.css";
import NoResultImage from "../../../../public/assets/no-results.svg";

export const NoResultFound = () => {
  return (
    <div className="no-result-container">
      <img
        src={NoResultImage}
        className="no-result-image"
        alt="no results found"
      />
      <h1 className="no-result-heading">No results found</h1>
    </div>
  );
};
