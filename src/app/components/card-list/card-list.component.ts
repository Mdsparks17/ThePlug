import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input()
  cardList: any;

  cardListAvailable: any;

  index: number = 0;

  numCardsToDisplay: number = 5;

  constructor() { }

  ngOnInit(): void {
    // this.cardListAvailable = this.cardList.slice(this.index, this.index + this.numCardsToDisplay);
  }

  // forward() {
  //   this.index += 5;
  //   if (this.index > this.cardList.length) {
  //     this.index = 0;
  //   }
  //   this.cardListAvailable = this.cardList.slice(this.index, this.index + this.numCardsToDisplay);
  // }

  // backward() {
  //   this.index -= 5;
  //   if (this.index < 0) {
  //     this.index = 0;
  //   }
  //   this.cardListAvailable = this.cardList.slice(this.index, this.index + this.numCardsToDisplay);
  // }

  ngOnChanges() {
    this.index = 0;
    this.cardListAvailable = this.cardList;
    // this.cardListAvailable = this.cardList.slice(this.index, this.index + this.numCardsToDisplay);
  }

}
