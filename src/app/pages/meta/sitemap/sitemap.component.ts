import { Component, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';


@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  blogQuery: any;
  listQuery: any;
  metaQuery: any;


  mypages = pages;

  constructor() { }

  ngOnInit(): void {
    this.blogQuery = this.search("#blog");
    this.listQuery = this.search("#list");
    this.metaQuery = this.search("#meta")
  }

  search(query: string) {
    let list: any = [];

    this.mypages.pages.forEach(page => {
      for(let i = 0; i < page.tags.length; i++) {
        if (page.tags[i] == query) {
          list.push(page)
        }
      }
    });

    return list;
  }
}
