import { useState } from "react";
import { DocumentCard } from "../DocumentCard/DocumentCard";
import "./FolderCard.css";
import { IDocumentCard } from "../DocumentCard/DocumentCard.types";
import { IDocumentDetails } from "../ViewAllFiles/ViewAllFiles.types";

export const FolderCard = ({
  title,
  date,
  type,
  image,
  files,
}: IDocumentCard & { files: IDocumentDetails[] | null }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="document-container">
      <DocumentCard
        image={image}
        title={title}
        type={type}
        date={date || ""}
        isExpanded={isExpanded}
        onClick={handleOnClick}
      />
      <div className={`child-documents ${isExpanded ? "expanded" : ""}`}>
        {files?.map((eachFile) => (
          <DocumentCard
            image={eachFile.image}
            title={eachFile.name}
            type={eachFile.type}
            date={eachFile.added || ""}
            key={eachFile.name}
          />
        ))}
      </div>
    </div>
  );
};
