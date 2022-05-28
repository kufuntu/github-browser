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

  public searchRepositories(): Observable<GithubResponse<GithubRepository>> {
    const headers = new HttpHeaders().set(
      'Accept',
      'application/vnd.github.v3+json'
    );
    return this.http.get<GithubResponse<GithubRepository>>(
      `${environment.githubUrl}/search/repositories?q=tetris`,
      { headers }
    );
  }

  public searchCommits(repo:string, keyword: string): Observable<GithubResponse<GithubCommit>> {
    const headers = new HttpHeaders().set(
      'Accept',
      'application/vnd.github.v3+json'
    );
    const query = `repo:${repo} ${keyword}`;
    return this.http.get<GithubResponse<GithubCommit>>(
      `${environment.githubUrl}/search/commits`,
      { headers, params: { q: query } }
    );
  }
}
