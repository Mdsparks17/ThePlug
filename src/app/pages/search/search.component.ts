import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, Event } from '@angular/router';
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
  Activatedroute: any;

  query: string = "";

  

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.route.queryParams
          .subscribe(params => {
            this.query = params['query'];
          }
        );

        this.search(this.query)
      }
    });
   }

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

  ngOnChanges() {
    this.search(this.query);
  }

}
