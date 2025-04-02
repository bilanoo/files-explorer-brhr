import { IDocumentDetails } from "../ViewAllFiles/ViewAllFiles.types";

export interface IFilter {
  data: IDocumentDetails[];
  setFilteredData: React.Dispatch<React.SetStateAction<IDocumentDetails[]>>;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}
