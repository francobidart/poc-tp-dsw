import {Component} from '@angular/core';
import {ProductosService} from "../productos.service";
import {Producto} from "../models/producto";

@Component({
  selector: 'app-tab1',

  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Productos: Producto[] = []

  constructor(private productosService: ProductosService) {
  }

  ngOnInit() {
    this.productosService.getProductos().subscribe((res: any) => {
      this.Productos = res.resultados;
    })
  }

  ionViewDidEnter() {
    this.productosService.getProductos().subscribe((res: any) => {
      this.Productos = res.resultados;
    })
  }


}
