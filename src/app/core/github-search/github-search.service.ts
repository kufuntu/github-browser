import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GithubRepository } from '../types/repository';
import { GithubResponse } from '../types/response';
import { environment } from '../../../environments/environment';
import { GithubCommit } from '../types/commit';

@Injectable()
export class GithubSearch {
  constructor(private http: HttpClient) {}

  public searchRepositories(keyword: string): Observable<GithubResponse<GithubRepository>> {
    const query = keyword;
    return this.http.get<GithubResponse<GithubRepository>>(
      `${environment.githubUrl}/search/repositories`,
      { params: { q: query } }
    );
  }

  public searchCommits(repo:string, keyword: string): Observable<GithubResponse<GithubCommit>> {
    const query = `repo:${repo} ${keyword}`;
    return this.http.get<GithubResponse<GithubCommit>>(
      `${environment.githubUrl}/search/commits`,
      { params: { q: query } }
    );
  }
}
