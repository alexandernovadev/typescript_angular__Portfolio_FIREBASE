import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();
  }

  private cargarProductos()
  {
    this.http.get('https://ejemploapi-d98c5.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          console.log(resp);
          this.productos = resp;
          this.cargando = false;
        });
  }
}
