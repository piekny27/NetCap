import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    public router: Router,
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['home']);
 }
}