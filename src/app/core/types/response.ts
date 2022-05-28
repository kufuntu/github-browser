export interface GithubResponse<T = any> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}
