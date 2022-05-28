import { Component } from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { GithubSearch } from '../../../../core/github-search/github-search.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  keyword$ = new Subject<string>();

  repositories$ = this.keyword$.pipe(
    switchMap(keyword => this.githubSearch.searchRepositories(keyword))
  );

  constructor(private githubSearch: GithubSearch) {}

  onSearch(keyword: string) {
    this.keyword$.next(keyword);
  }
}
