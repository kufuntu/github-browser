import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubSearch } from './github-search/github-search.service';

@NgModule({
  imports: [CommonModule],
  providers: [GithubSearch],
})
export class CoreModule { }
