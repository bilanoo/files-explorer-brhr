import "./DocumentCard.css";
import ArrowDropDown from "../../../public/assets/arrow-drop-down.svg";
import ArrowDropUp from "../../../public/assets/arrow-drop-up.svg";
import { IDocumentCard } from "./DocumentCard.types";

export const DocumentCard = ({
  title,
  date,
  type,
  image,
  isExpanded,
  onClick,
}: IDocumentCard) => {
  return (
    <div className="doc-container">
      <div className="image-container">
        <img src={image} alt="file type image" />
      </div>
      <div className="content-container">
        <span>{title}</span>
        <span className="fnt-w400">{date}</span>
        <span className="fnt-w400">{type}</span>
      </div>
      {type === "folder" && (
        <div
          className="image-container folder-dropdown-icon"
          onClick={onClick}
          data-testid="dropdown-icon"
        >
          <img
            src={!isExpanded ? ArrowDropDown : ArrowDropUp}
            alt={!isExpanded ? "folder dropdown icon" : "close folder icon"}
          />
        </div>
      )}
    </div>
  );
};
