import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { routes } from './routes';
import { CommitsComponent } from './components/commits/commits.component';
import { CommitsTableComponent } from './components/commits-table/commits-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ],
  declarations: [CommitsComponent, CommitsTableComponent],
})
export class CommitsModule {}
