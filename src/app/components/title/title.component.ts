import { Component, Input, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  myPageName: string = "";

  myPage: any;

  constructor() { }

  ngOnInit(): void {
    this.myPage = pages.pages.find(element => element.name == this.myPageName) 
  }

}
