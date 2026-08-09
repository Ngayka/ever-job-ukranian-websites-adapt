export interface WorkUaHtmlItem {
  id: string;
  title: string;
  company?: string;
  jobUrl: string;

  location?: string;
  isRemote?: boolean;

  salary?: string;
  description?: string;

  employmentInfo?: string;
  experienceInfo?: string;

  logoUrl?: string;
  datePosted?: string;
}
