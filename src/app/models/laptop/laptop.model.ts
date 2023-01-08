import { LaptopDetails } from "../laptop-details/laptop-details";
import { Price } from "../price/price";

export class Laptop {
  key?: string | null;
  id?: number;
  images?: string[];
  info?: string;
  main?: LaptopDetails;
  mpn?: string;
  name?: string;
  prices?: Price[];
  published?: boolean;
}