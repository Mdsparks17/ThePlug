import { Component, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mypages = pages; 

  constructor() { }

  ngOnInit(): void {
  }

}
