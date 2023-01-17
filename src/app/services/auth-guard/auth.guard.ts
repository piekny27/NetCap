import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from "../auth-service/auth.service";
import { Observable } from 'rxjs';
import { MatSnackBar, 
  MatSnackBarHorizontalPosition, 
  MatSnackBarVerticalPosition, 
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2.5;
  constructor(
    public authService: AuthService,
    public router: Router,
    private _snackBar: MatSnackBar,
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['login']);
      this._snackBar.open("First login to NetCap", "", {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    };
    return true;
  };
}
