import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ArticlesModule } from '../articles/articles.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ArticlesModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class ComponentsModule { }
