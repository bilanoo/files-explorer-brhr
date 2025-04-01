export interface IDocumentDetails {
  image: string;
  name: string;
  type: string;
  added?: string;
  files?: [];
}

export interface IViewAllFiles {
  data: IDocumentDetails[];
}
