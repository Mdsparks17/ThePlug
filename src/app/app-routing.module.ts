import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { HomeComponent } from './pages/home/home.component';
import { HowThisWebsiteWasMadeComponent } from './pages/how-this-website-was-made/how-this-website-was-made.component';
import { HowToBecomeASoftwareDeveloperComponent } from './pages/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';

const routes: Routes = [
  // Core Pages
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sitemap', component: SitemapComponent },

  // Blogs
  { path: 'how-to-become-a-software-developer', component: HowToBecomeASoftwareDeveloperComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'how-this-website-was-made', component: HowThisWebsiteWasMadeComponent },
  { path: 'movie', component: MovieListComponent },
  
  // Error Pages
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
