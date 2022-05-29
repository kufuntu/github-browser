import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, Subject, switchMap } from 'rxjs';
import { GithubSearch } from '../../../../core/github-search/github-search.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  name$ = new Subject<string>();
  stars$ = new BehaviorSubject<number | null>(null);
  language$ = new BehaviorSubject<string | null>(null);

  repositories$ = combineLatest([
    this.name$,
    this.language$,
    this.stars$
  ]).pipe(
    filter(([name, _language, _stars]) => name != null && name.length > 0),
    switchMap(([name, language, stars]) => this.githubSearch.searchRepositories(name, language, stars))
  );

  constructor(private githubSearch: GithubSearch) {}

  onSearchName(name: string) {
    this.name$.next(name);
  }

  onSearchLanguage(language: string) {
    this.language$.next(language);
  }

  onSearchStars(stars: string) {
    let starsNumber: number | null = parseInt(stars);
    if (!isNaN(starsNumber)) {
      starsNumber = null;
    }
    this.stars$.next(starsNumber);
  }
}
