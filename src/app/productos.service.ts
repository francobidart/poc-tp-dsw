import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private client: HttpClient) {
  }

  getProductos() {
    return this.client.get( environment.apiUrl + 'products')
  }

  getProducto(id: number) {
    return this.client.get(environment.apiUrl + 'products/' + id)
  }

  buscarProducto(query: string) {
    return this.client.get(environment.apiUrl + 'products/search', {
      params: {
        q: query
      }
    })
  }
}
