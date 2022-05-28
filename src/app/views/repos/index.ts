import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { routes } from './routes';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [RepositoriesComponent],
})
export class ReposModule {}
