import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/meta/about-page/about-page.component';
import { AnimeComponent } from './pages/lists/anime/anime.component';
import { HomeComponent } from './pages/meta/home/home.component';
import { HowThisWebsiteWasMadeComponent } from './pages/meta/how-this-website-was-made/how-this-website-was-made.component';
import { HowToBecomeASoftwareDeveloperComponent } from './pages/blogs/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { MovieListComponent } from './pages/lists/movie-list/movie-list.component';
import { PageNotFoundComponent } from './pages/meta/page-not-found/page-not-found.component';
import { SearchComponent } from './pages/meta/search/search.component';
import { EnvironmentalActivismResponsibilityComponent } from './pages/blogs/environmental-activism-responsibility/environmental-activism-responsibility.component';
import { UsingLinuxDailyComponent } from './pages/blogs/using-linux-daily/using-linux-daily.component';
import { TicTacToeComponent } from './pages/projects/tic-tac-toe/tic-tac-toe.component';
import { BingoGeneratorComponent } from './pages/projects/bingo-generator/bingo-generator.component';
import { AlienShrineComponent } from './pages/blogs/alien-shrine/alien-shrine.component';
import { HtmlPracticeComponent } from './pages/projects/html-practice/html-practice.component';
import { JavascriptPracticeComponent } from './pages/projects/javascript-practice/javascript-practice.component';


const routes: Routes = [
  // Core Pages
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchComponent },

  // Blogs
  { path: 'how-to-become-a-software-developer', component: HowToBecomeASoftwareDeveloperComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'how-this-website-was-made', component: HowThisWebsiteWasMadeComponent },
  { path: 'movie', component: MovieListComponent },
  { path: 'environmental-activism-responsibility', component: EnvironmentalActivismResponsibilityComponent },
  { path: 'using-linux-daily', component: UsingLinuxDailyComponent },
  { path: 'alien-shrine', component: AlienShrineComponent },

  // Projects
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'bingo-generator', component: BingoGeneratorComponent },
  { path: 'html-practice', component: HtmlPracticeComponent },
  { path: 'javascript-practice', component: JavascriptPracticeComponent },

  
  // Error Pages
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
