import "./DocumentCard.css";
import { IDocumentCard } from "./DocumentCard.types";

export const DocumentCard = ({ title, date, type, image }: IDocumentCard) => {
  return (
    <div className="doc-container">
      <div className="image-container">
        <img src={image} alt="file-type-image" />
      </div>
      <div className="content-container">
        <span>{title}</span>
        <span className="fnt-w400">{date}</span>
        <span className="fnt-w400">{type}</span>
      </div>
    </div>
  );
};
