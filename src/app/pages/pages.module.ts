import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { AnimeComponent } from './anime/anime.component';
import { HowThisWebsiteWasMadeComponent } from './how-this-website-was-made/how-this-website-was-made.component';



@NgModule({
  declarations: [
    SearchComponent,
    AboutPageComponent,
    HomeComponent,
    HowToBecomeASoftwareDeveloperComponent,
    PageNotFoundComponent,
    SitemapComponent,
    AnimeComponent,
    HowThisWebsiteWasMadeComponent
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
