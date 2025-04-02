import { DocumentCard } from "../DocumentCard/DocumentCard";
import { IViewAllFiles } from "./ViewAllFiles.types";
import "./ViewAllFiles.css";
import { FolderCard } from "../FolderCard/FolderCard";

export const ViewAllFiles = ({ data }: IViewAllFiles) => {
  return (
    <div>
      <h3>Files</h3>
      {data.map((documentDetails) => {
        return (
          <>
            {documentDetails.type === "folder" ? (
              <FolderCard
                image={documentDetails.image}
                title={documentDetails.name}
                type={documentDetails.type}
                date={documentDetails.added || ""}
                files={documentDetails.files ?? null}
                key={documentDetails.name}
              />
            ) : (
              <DocumentCard
                image={documentDetails.image}
                title={documentDetails.name}
                type={documentDetails.type}
                date={documentDetails.added || ""}
                key={documentDetails.name}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
