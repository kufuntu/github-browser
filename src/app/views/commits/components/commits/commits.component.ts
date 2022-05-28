import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject, switchMap } from 'rxjs';
import { GithubSearch } from '../../../../core/github-search/github-search.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent {
  keyword$ = new Subject<string>();

  commits$ = combineLatest([
    this.keyword$, 
    this.activatedRoute.params
  ]).pipe(
    switchMap(([keyword, params]) => {
      return this.githubSearch.searchCommits(params['project'], keyword);
    })
  );

  constructor(
    private githubSearch: GithubSearch,
    private activatedRoute: ActivatedRoute
  ) {}

  onSearch(keyword: string) {
    this.keyword$.next(keyword);
  }
}
