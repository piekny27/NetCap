import { Component} from '@angular/core';
import { AuthService } from "../../services/auth-service/auth.service";
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from '../dialog-logout/dialog-logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    public authService: AuthService,
    public dialog: MatDialog
    ) { }

  ShowDialog(){
    this.dialog.open(DialogLogoutComponent);
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
