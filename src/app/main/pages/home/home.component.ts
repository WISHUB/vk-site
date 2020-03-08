import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[];
  mostSellersCards: any[];

  constructor() {
    this.images = [
      {
        src: 'http://sillonesvk.com.ar/assets/images/slides/slide1.webp',
        alt: 'Paisaje'
      },
      {
        src: 'http://sillonesvk.com.ar/assets/images/slides/slide2.webp',
        alt: 'Ciudad'
      }
    ];

    this.mostSellersCards = [
      {
        title: 'CUADROS DE ROMA',
        subtitle: 'Diseño moderno y estético. Alta costura y calidad en terminación. Ideal para espacios Modernos y Minimalistas.',
        src: 'http://sillonesvk.com.ar/assets/images/products/respaldos/cuadros-roma/cuadros-roma02.webp',
        price: '7699',
        discount: '33',
        cuotes: '12',
        tags: ['Respaldos']
      },
      {
        title: 'CUADROS DE ROMA',
        subtitle: 'Diseño moderno y estético. Alta costura y calidad en terminación. Ideal para espacios Modernos y Minimalistas.',
        src: 'http://sillonesvk.com.ar/assets/images/products/respaldos/cuadros-roma/cuadros-roma02.webp',
        price: '7699',
        discount: '33',
        cuotes: '12',
        tags: ['Respaldos']
      },
      {
        title: 'CUADROS DE ROMA',
        subtitle: 'Diseño moderno y estético. Alta costura y calidad en terminación. Ideal para espacios Modernos y Minimalistas.',
        src: 'http://sillonesvk.com.ar/assets/images/products/respaldos/cuadros-roma/cuadros-roma02.webp',
        price: '7699',
        discount: '33',
        cuotes: '12',
        tags: ['Respaldos']
      }
    ];
  }

  ngOnInit(): void {
  }

}
