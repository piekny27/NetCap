import { LaptopDetails } from "../laptop-details/laptop-details";
import { Price } from "../price/price";

export class Laptop {
  key?: string | null;
  id?: number;
  image?: string;
  info?: string;
  main?: LaptopDetails;
  mpn?: string;
  name?: string;
  price?: Price;
  published?: boolean;
}