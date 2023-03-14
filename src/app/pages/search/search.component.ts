import { Component, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mypages = pages;
  myTags: string[] = [];
  queryResults: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.mypages.pages.forEach(page => {
      page.tags.forEach(tag => {
        if (this.myTags.indexOf(tag) === -1) {
          this.myTags.push(tag);
        }
      });
    });

    this.myTags.sort();
  }

  onClick(event: any) {
    this.search(event.target.attributes.id.value)
  }

  search(query: string) {
    this.queryResults = [];

    this.mypages.pages.forEach(page => {
      for(let i = 0; i < page.tags.length; i++) {
        if (page.tags[i] == query) {
          this.queryResults.push(page)
        }
      }
    });
  }

}
