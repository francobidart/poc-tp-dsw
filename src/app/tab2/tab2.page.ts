import {Component} from '@angular/core';
import {Producto} from "../models/producto";
import {ProductosService} from "../productos.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Productos: Producto[] = []
  hasSearch: boolean = false;

  constructor(private productosService: ProductosService) {
  }

  buscar(event: any) {
    this.Productos = []
    this.productosService.buscarProducto(event.detail.value).subscribe((res: any) => {
      this.Productos = res.resultados;
      this.hasSearch = true;
    }, (error: any) => {
      this.hasSearch = false;
    })
  }
}
