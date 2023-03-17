import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobil: string = "mobile-align";

  constructor() {
    this.getScreenSize();
   }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    //  console.log(window.innerWidth);
    window.innerWidth > 750 ? this.isMobil = "web-align" :  this.isMobil = "mobile-align";
  }

}
