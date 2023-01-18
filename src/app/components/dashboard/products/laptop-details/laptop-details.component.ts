import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { LaptopDetails } from 'src/app/models/laptop-details/laptop-details';
import { Laptop } from 'src/app/models/laptop/laptop.model';
import { Price } from 'src/app/models/price/price';
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
  newPrice: Price = {
    currency: 'USD',
    old_price: 0
  }
  newDetails: LaptopDetails = {
    cpu_implementation: '',
    cpu_number_of_cores: 0,
    cpu_type: '',
    design_color_name: '',
    display_size__inch: 0,
    memory_ram__gb: 0,
    storage_capacity__gb: 0,
    storage_type: ''
  }
  newLaptop: Laptop = {
    key: Math.floor(Math.random() * (999999 - 100000) + 100000).toString(),
    image: '',
    info: '',
    main: this.newDetails,
    mpn: '',
    name: 'New Laptop',
    price: this.newPrice,
    published: false
  }

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
      image: this.currentLaptop.image,
      info: this.currentLaptop.info,
      main: this.currentLaptop.main,
      mpn: this.currentLaptop.mpn,
      name: this.currentLaptop.name,
      price: this.currentLaptop.price,
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

  addLaptop(): void {
    this.laptopService.create(this.newLaptop)
    .then(()=>{
      this.refreshList.emit();
      this.message = 'The laptop was added successfully!';
    });
  }
}