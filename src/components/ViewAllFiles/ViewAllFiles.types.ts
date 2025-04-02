export interface IDocumentDetails {
  image: string;
  type: string;
  name: string;
  added?: string;
  files?: IDocumentDetails[];
}

export interface IViewAllFiles {
  data: IDocumentDetails[];
}
