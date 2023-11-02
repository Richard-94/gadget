import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../Data-Services/services/auth.service';

@Injectable()
export class adminGuard implements CanActivate{
  constructor(private authServ: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isLoggedIn = this.authServ.checkLoginStatus();

    if (isLoggedIn && this.authServ.currentUser && this.authServ.currentUser.roles.includes('ROLE_ADMIN')) {
      console.log("sono admin");
      return true;
    } else {
      console.log("buttato fuori");
      this.router.navigate(['/no-access']);
      return false;
    }
  }
};
