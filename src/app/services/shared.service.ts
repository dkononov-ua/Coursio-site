import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { serverPath } from 'src/app/config/server-config';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  selectedFlatId!: string | null;
  private statusMessageSubject = new BehaviorSubject<string>('');
  private reportResultSubject = new Subject<any>();
  private checkOwnerPageSubject = new BehaviorSubject<string>('');
  public checkOwnerPage$ = this.checkOwnerPageSubject.asObservable();

  private checkIsMobileSubject = new BehaviorSubject<boolean>(false);
  public isMobile$ = this.checkIsMobileSubject.asObservable();
  loading: boolean | undefined;


  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private location: Location,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {
    const storedCheckOwner = localStorage.getItem('checkOwnerPage');
    if (storedCheckOwner) {
      this.checkOwnerPageSubject.next(storedCheckOwner);
    }
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.checkIsMobileSubject.next(result.matches);
    });
  }

  getReportResultSubject() {
    return this.reportResultSubject.asObservable();
  }

  setCheckOwnerPage(ownerPage: string): void {
    localStorage.setItem('checkOwnerPage', ownerPage);
    if (this.checkOwnerPageSubject.value !== ownerPage) {
      this.checkOwnerPageSubject.next(ownerPage);
    }
  }


  getStatusMessage(): Observable<string> {
    return this.statusMessageSubject.asObservable();
  }

  setStatusMessage(message: string): void {
    this.statusMessageSubject.next(message);
  }

  reloadPage() {
    this.loading = true;
    setTimeout(() => {
      location.reload();
    }, 500);
  }

  goBack(): void {
    this.location.back();
  }

  getAuthorization() {
    this.setStatusMessage('Для цього потрібно бути авторизованим');
    setTimeout(() => {
      this.router.navigate(['/house/house-info']);
      this.setStatusMessage('');
    }, 3000);
  }

  getAuthorizationHouse() {
    this.setStatusMessage('Для цього потрібно створити або обрати оселю');
    setTimeout(() => {
      this.router.navigate(['/house/house-control/add-house']);
      this.setStatusMessage('');
    }, 3000);
  }

  logout() {
    this.setStatusMessage('Потрібно авторизуватись');
    this.clearCache();
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
      this.setStatusMessage('');
    }, 1500);
  }

  logoutHouse() {
    this.setStatusMessage('Потрібно обрати оселю');
    this.clearCacheHouse();
    setTimeout(() => {
      this.router.navigate(['/house/house-control/selection-house']);
      this.setStatusMessage('');
    }, 1500);
  }

  //повна очистка кешу від попередніх даних
  clearCache() {
    localStorage.removeItem('selectedComun');
    localStorage.removeItem('selectedFlatId');
    localStorage.removeItem('selectedFlatName');
    localStorage.removeItem('selectedHouse');
    localStorage.removeItem('houseData');
    localStorage.removeItem('userData');
    localStorage.removeItem('user');
    // console.log('кеш очищено повністю')
  }

  //очистка кешу від попередніх даних оселі
  clearCacheHouse() {
    localStorage.removeItem('selectedComun');
    localStorage.removeItem('selectedFlatId');
    localStorage.removeItem('selectedFlatName');
    localStorage.removeItem('selectedHouse');
    localStorage.removeItem('houseData');
    // console.log('кеш оселі очищено')
  }
}
