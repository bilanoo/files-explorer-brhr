import { DocumentCard } from "../DocumentCard/DocumentCard";
import { IViewAllFiles } from "./ViewAllFiles.types";

export const ViewAllFiles = ({ data }: IViewAllFiles) => {
  return (
    <div>
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
