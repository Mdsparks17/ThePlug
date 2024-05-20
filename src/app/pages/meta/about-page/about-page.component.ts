import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  jpeg240 = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-240x60.jpg\" alt=\"ThePlug\" /></a>"
  jpeg240inverse = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-240x60-inverse.jpg\" alt=\"ThePlug\" /></a>"
  png240 = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-240x60.png\" alt=\"ThePlug\" /></a>"
  png240inverse = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-240x60-inverse.png\" alt=\"ThePlug\" /></a>"
  jpeg88 = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-88x31.jpg\" alt=\"ThePlug\" /></a>"
  jpeg88inverse = "<a title=\"ThePlug\" href=\"https://theplug.icu/\"><img src=\"https://thplug.icu/assets/images/theplug-88x31-inverse.jpg\" alt=\"ThePlug\" /></a>"



  constructor() { }

  ngOnInit(): void {
  }

}
