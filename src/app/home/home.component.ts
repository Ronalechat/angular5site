import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { NavLeftComponent } from '../nav-left/nav-left.component';
import { NavRightComponent } from '../nav-right/nav-right.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
