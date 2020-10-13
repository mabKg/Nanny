import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import { JwtHelperService} from '@auth0/angular-jwt';
const jwt = new JwtHelperService
import 'rxjs/Rx';

class DecodedToken {
  exp: number = 0;
  username: string = '';
}

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('nanny_meta', )) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('nanny_auth', token);
    localStorage.setItem('nanny_meta', JSON.stringify(this.decodedToken));

    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
      return this.http.post('api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post('api/v1/users/auth', userData).map(
(token: string) => this.saveToken(token));
  }

  public logout() {
    localStorage.removeItem('nanny_auth');
    localStorage.removeItem('nanny_meta')

    this.decodedToken = new DecodedToken();
  }

 public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }
 
  public getAuthToken(): string {
    return localStorage.getItem('nanny_auth');
  }

  private getUsername(): string {
    return this.decodedToken.username;
      }
}