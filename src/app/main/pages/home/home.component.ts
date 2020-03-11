import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostSellersCards: any[];

  constructor() {
    this.mostSellersCards = [
      {
        title: 'Cuadros de Roma',
        subtitle: 'Diseño moderno y estético. Alta costura y calidad en terminación. Ideal para espacios Modernos y Minimalistas.',
        src: 'http://sillonesvk.com.ar/assets/images/products/respaldos/cuadros-roma/cuadros-roma02.webp',
        price: 7699,
        discount: 33,
        cuotes: 12,
        tags: ['Respaldos']
      },
      {
        title: 'Elegance standard',
        subtitle: 'Esquinero de primera Calidad y alta costura. Estructura Reforzada, encolada y atornillada hecha para todas las familias.',
        src: 'http://sillonesvk.com.ar/assets/images/products/esquineros/esquinero-elegance02.webp',
        price: 36599,
        discount: 30,
        cuotes: 12,
        tags: ['Esquineros']
      },
      {
        title: 'Escandinavo',
        subtitle: 'Sillón Escandinavo de Estilo moderno. Estructura Robusta pero acolchado. Conveniente y estetico ideal espacios vivos y amplios.',
        src: 'http://sillonesvk.com.ar/assets/images/products/sillones/es4.webp',
        price: 23199,
        discount: 33,
        cuotes: 12,
        tags: ['Sillones']
      }
    ];
  }

  ngOnInit(): void {
  }

}
