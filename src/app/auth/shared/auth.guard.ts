import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
private url: string;

  constructor(private authService: AuthService,
              private router: Router) {}

              private handleAuthstate(): boolean {
               if (this.isLoginOrRegister()) {
                   this.router.navigate(['/nanny']);
                   return false;
               }
return true;
              }

              private handleNotAuthState(): boolean {
if (this.isLoginOrRegister()) {
    return true;
}
this.router.navigate(['/login'])
              }

              private isLoginOrRegister(): boolean {
                  if (this.url.includes('login') || this.url.includes('register')) {
                      return true;
                  }
                  return false;
              }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   this.url = state.url;

   if (this.authService.isAuthenticated()) {
       return this.handleAuthstate();
   }
   return this.handleNotAuthState();
  }
}
