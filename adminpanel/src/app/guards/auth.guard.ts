import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('sid')!= undefined) {
      return true;
    }
    else {
      Swal.fire('Oops', 'First Login the application', "error");
      this.router.navigate(['/']);
    }
  }
}
