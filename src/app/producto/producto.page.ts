import { Component, OnInit } from '@angular/core';
import {Producto} from "../models/producto";
import {ProductosService} from "../productos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  Articulo: Producto = new Producto();

  constructor(private productosService: ProductosService, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    let id = this.route.snapshot.params['id'];
    this.productosService.getProducto(id).subscribe((res: any) => {
      this.Articulo  = res.resultados[0];
    })
  }
}
