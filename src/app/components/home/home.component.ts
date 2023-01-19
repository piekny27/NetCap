import { Component, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth-service/auth.service";
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from '../dialog-logout/dialog-logout.component';
import { Laptop } from 'src/app/models/laptop/laptop.model';
import { LaptopService } from 'src/app/services/laptop-service/laptop.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  laptops?: Laptop[] = new Array<Laptop>();

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private laptopService: LaptopService
    ) { }

  ngOnInit(): void {
     this.retrieveLaptops();
  }

  ShowDialog(){
    this.dialog.open(DialogLogoutComponent);
  }

  retrieveLaptops(): void {
    this.laptopService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      for(let i = 0; i < data.length; i++){
        if(data[i].published){
          this.laptops?.push(data[i]);
        }
      }     
    });
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
