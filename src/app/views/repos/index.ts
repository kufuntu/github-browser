import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { routes } from './routes';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepositoriesTableComponent } from './components/repositories-table/repositories-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ],
  declarations: [RepositoriesComponent, RepositoriesTableComponent],
})
export class ReposModule {}
