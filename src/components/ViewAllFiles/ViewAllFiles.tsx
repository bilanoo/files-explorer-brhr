import { DocumentCard } from "../DocumentCard/DocumentCard";
import { IViewAllFiles } from "./ViewAllFiles.types";
import "./ViewAllFiles.css";

export const ViewAllFiles = ({ data }: IViewAllFiles) => {
  return (
    <div>
      <h3>Files</h3>
      {data.map((documentDetails) => {
        return (
          <DocumentCard
            image={documentDetails.image}
            title={documentDetails.name}
            type={documentDetails.type}
            date={documentDetails.added || ""}
            key={documentDetails.name}
          />
        );
      })}
    </div>
  );
};
