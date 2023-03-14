import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticleComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class PagesModule { }
