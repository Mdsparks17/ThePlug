import { Component, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  mypage = pages.pages.find(element => element.name == 'About') 

  constructor() { }

  ngOnInit(): void {
  }

}
