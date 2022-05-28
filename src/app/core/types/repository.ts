import { GithubUser } from './user';

export interface GithubRepository {
  id: number;
  name: string;
  full_name: string;
  owner: GithubUser;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}
