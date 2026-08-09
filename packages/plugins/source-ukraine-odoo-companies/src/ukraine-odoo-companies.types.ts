export interface UkraineOdooCompanyConfig {
  id: string;
  name: string;
  careersUrl: string;

  jobSelector: string;
  titleSelector?: string;
  linkSelector?: string;

  descriptionSelector?: string;
  locationSelector?: string;

  titleAttribute?: string;
  linkAttribute?: string;

  enabled?: boolean;
  allowEmptyResults?: boolean;
}

export interface UkraineOdooCompanyJob {
  id: string;
  title: string;
  jobUrl: string;
  companyName: string;

  description?: string;
  location?: string;
}