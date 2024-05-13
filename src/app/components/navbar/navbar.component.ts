import { Component, OnInit } from '@angular/core';
import { path_logo } from 'src/app/config/server-config';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  path_logo = path_logo;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
