import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  
  @Input()
  myTags: any;

  constructor() { }

  ngOnInit(): void {
  }

}
