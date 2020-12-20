import { Component } from '@angular/core';
import { InfopageService } from './service/infopage.service';
import { ProductosService } from './service/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _infoservice: InfopageService,
              public _productoservice: ProductosService) {

  }
}
