import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Laptop } from 'src/app/models/laptop/laptop.model';
import { LaptopService } from 'src/app/services/laptop-service/laptop.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.scss']
})
export class LaptopDetailsComponent implements OnInit {
  @Input() laptop?: Laptop;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentLaptop: Laptop = {
    published: false
  };
  message = '';

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentLaptop = { ...this.laptop };
  }

  updatePublished(status: boolean): void {
    if (this.currentLaptop.key) {
      this.laptopService.update(this.currentLaptop.key, { published: status })
      .then(() => {
        this.currentLaptop.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateLaptop(): void {
    const data = {
      key: this.currentLaptop.key,
      images: this.currentLaptop.images,
      info: this.currentLaptop.info,
      main: this.currentLaptop.main,
      mpn: this.currentLaptop.mpn,
      name: this.currentLaptop.name,
      prices: this.currentLaptop.prices,
    };

    if (this.currentLaptop.key) {
      this.laptopService.update(this.currentLaptop.key, data)
        .then(() => this.message = 'The laptop was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteLaptop(): void {
    if (this.currentLaptop.key) {
      this.laptopService.delete(this.currentLaptop.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The laptop was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}