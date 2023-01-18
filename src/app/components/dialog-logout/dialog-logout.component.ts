import { Component } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss']
})
export class DialogLogoutComponent {
  constructor(public authService: AuthService) {}

  ConfirmDialog (){
    this.authService.SignOut();
  }
}
