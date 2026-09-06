export interface RemotefirstjobsApiJob {
  id: string;
  url: string;
  company_name: string;
  company_logo: string | null;
  title: string;
  category: string | null;
  seniority: string | null;
  description: string;
  salary_min: number;
  salary_max: number;
  locations: string[];
  published_at: string;
}

export interface RemotefirstjobsApiResponse {
  page: number;
  jobs_count: number;
  jobs: RemotefirstjobsApiJob[] | null;
}