import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './articles/about-page/about-page.component';
import { HomeComponent } from './articles/home/home.component';
import { HowToBecomeASoftwareDeveloperComponent } from './articles/how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'how-to-become-a-software-developer', component: HowToBecomeASoftwareDeveloperComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
