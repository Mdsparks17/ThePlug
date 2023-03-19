import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './pages/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'how-to-become-a-software-developer', component: HowToBecomeASoftwareDeveloperComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
