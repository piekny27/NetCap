import { Component, OnInit, ViewChild, HostListener, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from "../../../services/auth-service/auth.service";
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from '../../dialog-logout/dialog-logout.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, private overlay: OverlayContainer, private dialog: MatDialog) {}
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  opened = true;
  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;
  ngOnInit() {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  ShowDialog(){
    this.dialog.open(DialogLogoutComponent);
  }
}
