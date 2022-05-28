import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  public searchCommits(): Observable<GithubResponse<GithubCommit>> {
    const headers = new HttpHeaders().set(
      'Accept',
      'application/vnd.github.v3+json'
    );
    return this.http.get<GithubResponse<GithubCommit>>(
      `${environment.githubUrl}/search/commits?q=repo:octocat/Spoon-Knife+css`,
      { headers }
    );
  }
}
