import { Component, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  @Input() images: any[];

  mySwiper: Swiper;

  constructor() {
    this.images = [
      {
        src: 'https://images.pexels.com/photos/3709388/pexels-photo-3709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Paisaje'
      },
      {
        src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Ciudad'
      }
    ];
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', this.swiperParameters());
  }

  swiperParameters(): any {
    return { // Optional parameters
      direction: 'vertical',
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };
  }

}
