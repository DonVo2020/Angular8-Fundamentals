import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-directive',
  templateUrl: './carousel-directive.component.html'
})
export class CarouselDirectiveComponent implements OnInit {

  images: string[];

  ngOnInit() {
    this.images = [
      '../assets/img/Houston.jpg',
      '../assets/img/Boston.jpg',
      '../assets/img/Miami.jpg',
      '../assets/img/Seattle.jpg',
    ];
  }
}
