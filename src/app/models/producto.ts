import { TipoProducto } from './tipoproducto';

export class Producto {
  id: number | null = null;
  TipoProducto?: TipoProducto;
  precio: number = 0;
  nombre: string = '';
  categoria?: number;
  descripcion?: string | null;
  stock: number = 0;
  imagen?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
