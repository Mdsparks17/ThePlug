import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './how-to-become-a-software-developer/how-to-become-a-software-developer.component';



@NgModule({
  declarations: [
    ArticleComponent,
    SearchComponent,
    AboutPageComponent,
    HomeComponent,
    HowToBecomeASoftwareDeveloperComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
