import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ArticlesModule } from '../articles/articles.module';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    ContentComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    ContentComponent,
    TagListComponent
  ]
})
export class ComponentsModule { }
