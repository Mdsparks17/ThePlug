import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HowToBecomeASoftwareDeveloperComponent } from './how-to-become-a-software-developer/how-to-become-a-software-developer.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomeComponent,
    HowToBecomeASoftwareDeveloperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class ArticlesModule { }
