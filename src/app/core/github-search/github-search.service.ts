import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { GithubRepository } from '../types/repository';
import { GithubResponse } from '../types/response';
import { environment } from '../../../environments/environment';
import { GithubCommit } from '../types/commit';

const EMPTY_RESPONSE: GithubResponse = {
  total_count: 0,
  incomplete_results: false,
  items: []
};

@Injectable()
export class GithubSearch {
  constructor(private http: HttpClient) {}

  public searchRepositories(keyword: string, language: string | null, stars: number | null): Observable<GithubResponse<GithubRepository>> {
    let query = keyword;
    if (language) {
      query += ` language:${language}`;
    }
    if (stars) {
      query += ` stars:>=${stars}`;
    }
    return this.http.get<GithubResponse<GithubRepository>>(
      `${environment.githubUrl}/search/repositories`,
      { params: { q: query } }
    ).pipe(
      catchError(() => of(EMPTY_RESPONSE))
    );
  }

  public searchCommits(repo:string, keyword: string): Observable<GithubResponse<GithubCommit>> {
    const query = `repo:${repo} ${keyword}`;
    return this.http.get<GithubResponse<GithubCommit>>(
      `${environment.githubUrl}/search/commits`,
      { params: { q: query } }
    ).pipe(
      catchError(() => of(EMPTY_RESPONSE))
    );
  }
}
