import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../service/infopage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public is: InfopageService) { }

  ngOnInit() {
  }

}
