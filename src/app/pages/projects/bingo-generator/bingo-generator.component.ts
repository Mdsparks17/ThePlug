import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-generator',
  templateUrl: './bingo-generator.component.html',
  styleUrls: ['./bingo-generator.component.scss']
})
export class BingoGeneratorComponent implements OnInit {
  bingoCard = [
    {topic: "", color: ""}

  ];

  ratio: number = 0;

  constructor() { 

  }

  ngOnInit(): void {
  }

  onClick(index: number) {
    this.bingoCard[index].color = "selected";
  }

  loadBingo(items: any) {
    items = items.split("\n");
    items.sort(() => Math.random() - 0.5);
    this.ratio = items.length;
    this.bingoCard = [];
    for (let i = 0; i < items.length && i < 25; i++) {
      this.bingoCard.push({topic: items[i], color: ""})
    }
  }

}
