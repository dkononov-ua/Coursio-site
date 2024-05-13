import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';
import { serverPath, path_logo } from 'src/app/config/server-config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursio-site';
  statusMessage: string = '';
  @ViewChild('locationElement') locationElement!: ElementRef;
  shouldBeVisible: boolean = true;
  path_logo = path_logo;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private location: Location,
    private router: Router,
    private el: ElementRef,
    private sharedService: SharedService,
  ) {
    this.sharedService.getStatusMessage().subscribe((message: string) => {
      this.statusMessage = message;
    });
  }
}
