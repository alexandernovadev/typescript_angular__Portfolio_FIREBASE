import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/interface-info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPagina = {};
  infoequipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient )
  {
    this.cargar_info();
    this.cargar_equipo();
  }

  private cargar_info()
  {
    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPagina) => {

      // cargadame dice si la data ya fue cargada
      this.cargada = true;
      this.info = resp;
      console.log('JSON assets',resp);

    });
  }

  private cargar_equipo()
  {
    this.http.get('https://ejemploapi-d98c5.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.infoequipo = resp;
      console.log('Equipo',resp);
    });
  }
}
