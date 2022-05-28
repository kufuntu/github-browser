export interface GithubCommit {
  html_url: string;
  commit: {
    message: string;
    author: {
      name: string;
    }
  }
}
