import { Injectable } from '@angular/core';
import { Laptop } from '../../models/laptop/laptop.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private dbPath = '/laptops';

  laptopsRef: AngularFireList<Laptop>;

  constructor(private db: AngularFireDatabase) {
    this.laptopsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Laptop> {
    return this.laptopsRef;
  }

  create(laptop: Laptop): any {
    return this.laptopsRef.push(laptop);
  }

  update(key: string, value: any): Promise<void> {
    return this.laptopsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.laptopsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.laptopsRef.remove();
  }
}