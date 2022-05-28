import { Component, OnInit } from '@angular/core';
import { GithubSearch } from '../../../../core/github-search/github-search.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent implements OnInit {
  commits$ = this.githubSearch.searchCommits();

  constructor(private githubSearch: GithubSearch) {}

  ngOnInit(): void {}
}
