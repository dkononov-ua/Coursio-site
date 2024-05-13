import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { serverPath } from 'src/app/config/server-config';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedFlatId: any | null;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  getInfoUser(): Observable<any> {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return this.http.post(serverPath + '/userinfo', JSON.parse(userJson))
        .pipe(
          tap((response: any) => {
            // console.log(response)
            if (response && response.status === true) {
              localStorage.setItem('userData', JSON.stringify(response));
            }
            else {
              this.sharedService.logout();
            }
          }),
          catchError((error: any) => {
            localStorage.removeItem('userData');
            return throwError('user not found');
          })
        );
    } else {
      return throwError('user not found');
    }
  }
}
