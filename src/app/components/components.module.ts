import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list/tag-list.component';
import { TitleComponent } from './title/title.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardTableComponent } from './card-table/card-table.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagListComponent,
    TitleComponent,
    CardListComponent,
    CardTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagListComponent,
    TitleComponent,
    CardListComponent,
    CardTableComponent
  ]
})
export class ComponentsModule { }
