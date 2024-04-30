import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './meta/search/search.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './meta/about-page/about-page.component';
import { HomeComponent } from './meta/home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './blogs/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { PageNotFoundComponent } from './meta/page-not-found/page-not-found.component';
import { AnimeComponent } from './lists/anime/anime.component';
import { HowThisWebsiteWasMadeComponent } from './meta/how-this-website-was-made/how-this-website-was-made.component';
import { MovieListComponent } from './lists/movie-list/movie-list.component';
import { EnvironmentalActivismResponsibilityComponent } from './blogs/environmental-activism-responsibility/environmental-activism-responsibility.component';
import { UsingLinuxDailyComponent } from './blogs/using-linux-daily/using-linux-daily.component';
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
import { BingoGeneratorComponent } from './projects/bingo-generator/bingo-generator.component';
import { AlienShrineComponent } from './blogs/alien-shrine/alien-shrine.component';
import { HtmlPracticeComponent } from './projects/html-practice/html-practice.component';
import { JavascriptPracticeComponent } from './projects/javascript-practice/javascript-practice.component';

@NgModule({
  declarations: [
    SearchComponent,
    AboutPageComponent,
    HomeComponent,
    HowToBecomeASoftwareDeveloperComponent,
    PageNotFoundComponent,
    AnimeComponent,
    HowThisWebsiteWasMadeComponent,
    MovieListComponent,
    EnvironmentalActivismResponsibilityComponent,
    UsingLinuxDailyComponent,
    TicTacToeComponent,
    BingoGeneratorComponent,
    AlienShrineComponent,
    HtmlPracticeComponent,
    JavascriptPracticeComponent
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
