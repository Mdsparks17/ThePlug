import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './meta/search/search.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './meta/about-page/about-page.component';
import { HomeComponent } from './meta/home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './blogs/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { PageNotFoundComponent } from './meta/page-not-found/page-not-found.component';
import { SitemapComponent } from './meta/sitemap/sitemap.component';
import { AnimeComponent } from './lists/anime/anime.component';
import { HowThisWebsiteWasMadeComponent } from './meta/how-this-website-was-made/how-this-website-was-made.component';
import { MovieListComponent } from './lists/movie-list/movie-list.component';



@NgModule({
  declarations: [
    SearchComponent,
    AboutPageComponent,
    HomeComponent,
    HowToBecomeASoftwareDeveloperComponent,
    PageNotFoundComponent,
    SitemapComponent,
    AnimeComponent,
    HowThisWebsiteWasMadeComponent,
    MovieListComponent
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
