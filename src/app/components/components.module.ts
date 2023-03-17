import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ArticlesModule } from '../articles/articles.module';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TagListComponent
  ]
})
export class ComponentsModule { }
