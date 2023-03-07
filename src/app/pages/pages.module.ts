import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
  ],
  exports: [
    ArticleComponent
  ]
})
export class PagesModule { }
