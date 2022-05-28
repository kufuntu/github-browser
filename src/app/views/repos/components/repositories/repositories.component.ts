import { Component, OnInit } from '@angular/core';
import { GithubSearch } from '../../../../core/github-search/github-search.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repositories$ = this.githubSearch.searchRepositories();

  constructor(private githubSearch: GithubSearch) {}

  ngOnInit(): void {}
}
