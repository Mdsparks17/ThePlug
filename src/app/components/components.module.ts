import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagListComponent
  ]
})
export class ComponentsModule { }
