import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: any[];
  @Input() caption: boolean;

  constructor() {
    this.images = [];
    this.caption = false;
  }

  ngOnInit(): void {
  }

}
