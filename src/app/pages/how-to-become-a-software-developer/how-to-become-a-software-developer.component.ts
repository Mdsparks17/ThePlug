import { Component, OnInit } from '@angular/core';
import pages from 'src/assets/pages.json';

@Component({
  selector: 'app-how-to-become-a-software-developer',
  templateUrl: './how-to-become-a-software-developer.component.html',
  styleUrls: ['./how-to-become-a-software-developer.component.scss']
})
export class HowToBecomeASoftwareDeveloperComponent implements OnInit {

  mypage = pages.pages.find(element => element.name == 'How to Become a Software Developer') 

  constructor() { }

  ngOnInit(): void {
  }

}
