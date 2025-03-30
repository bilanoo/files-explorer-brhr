export interface IDocumentCard {
  title: string;
  type: string;
  image: string;
  isExpanded?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  date?: string;
}
