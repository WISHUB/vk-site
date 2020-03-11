import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() links: any;
  categorias: string[];

  constructor() {
    this.links = [];
    this.categorias = [
      'Respaldos (en todas sus medidas)',
      'Tusor',
      'Cuadros de Roma',
      'Lisos',
      'Capitoné',
      'Berger',
      'Chesterfield',
      'Valhalla (con tachas)'
    ];
  }

  ngOnInit(): void {
  }

}
