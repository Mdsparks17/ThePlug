import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alien-shrine',
  templateUrl: './alien-shrine.component.html',
  styleUrls: ['./alien-shrine.component.scss']
})
export class AlienShrineComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundImage = "url('./assets/images/star-bg.gif')";
    document.body.style.backgroundSize = "20%";

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.body.className="";
    location.reload();
  }

}
