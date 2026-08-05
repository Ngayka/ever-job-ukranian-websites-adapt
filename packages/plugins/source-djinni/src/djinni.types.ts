export interface DjinniHtmlJob {
  id: string;
  title: string;
  link: string;
  descriptionHtml?: string;
  companyName?: string;
  location?: string;
  datePosted?: string;
  isRemote: boolean;
}