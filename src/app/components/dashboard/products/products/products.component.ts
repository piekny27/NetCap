import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/services/laptop-service/laptop.service';
import { Laptop } from 'src/app/models/laptop/laptop.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  laptops?: Laptop[];
  currentLaptop?: Laptop;
  currentIndex = -1;
  title = '';

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.retrieveLaptops();
  }

  refreshList(): void {
    this.currentLaptop = undefined;
    this.currentIndex = -1;
    this.retrieveLaptops();
  }

  retrieveLaptops(): void {
    this.laptopService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.laptops = data;
    });
  }
  setActiveLaptop(laptop: Laptop, index: number): void {
    this.currentLaptop = laptop;
    this.currentIndex = index;
  }

  removeAllLaptops(): void {
    this.laptopService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}