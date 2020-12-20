import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../service/infopage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  date = new Date();
  year: any;

  constructor(public _infoservice: InfopageService) {
    this.year  = this.date.getFullYear();
   }

  ngOnInit() {
  }

}
