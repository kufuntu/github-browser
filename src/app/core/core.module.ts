import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GithubSearch } from './github-search/github-search.service';
import { GithubInterceptor } from './github-search/github.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    GithubSearch,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: GithubInterceptor, 
      multi: true
    }
  ],
})
export class CoreModule { }
