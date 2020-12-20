import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../service/infopage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public is: InfopageService) { }

  ngOnInit() {
  }

}
