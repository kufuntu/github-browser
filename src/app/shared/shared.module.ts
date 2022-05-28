import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from './layout/layout.module';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchFieldComponent } from './search-field/search-field.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    AvatarComponent,
    SearchFieldComponent
  ],
  exports: [
    LayoutModule,
    AvatarComponent,
    SearchFieldComponent
  ]
})
export class SharedModule {}
