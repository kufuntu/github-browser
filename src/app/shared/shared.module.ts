import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  imports: [CommonModule, LayoutModule],
  declarations: [
    AvatarComponent
  ],
  exports: [
    LayoutModule,
    AvatarComponent
  ]
})
export class SharedModule {}
