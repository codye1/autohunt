export interface Car {
  _id?: string;
  title: string;
  brand: string;
  carModel: string;
  condition: string;
  year: number;
  bodyType: string;
  passengerCapacity: number;
  exteriorColor: string;
  fuelType: string;
  mileage: number;
  transmission: string;
  drivetrain: string;
  power: number;
  engineCapacity: number;
  chargeSpeed?: number;
  chargePort?: string;
  chargeTime?: number;
  length: number;
  width: number;
  height: number;
  cargoVolume: number;
  price: number;
  location: {
    address: string;
    lat: string;
    lon: string;
  };
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  features: string[];
  seller: string;
}

export interface IUser {
  email: string;
  phone: string;
  img: string;
  name: string;
}
export enum Components {
  Condition = 'Condition',
  FilterFieldset = 'FilterFieldset',
  MultiRange = 'MultiRange',
}

export interface BaseItem {
  component: Components;
  title: string;
}

export interface FilterFieldsetItem extends BaseItem {
  component: Components.FilterFieldset;
  items: string[];
  name: string;
  onSelected?: (selected: string[]) => void;
  disabled?: boolean;
}

export interface MultiRangeItem extends BaseItem {
  component: Components.MultiRange;
  name: string;
  min: number;
  max: number;
}

export type FilterItems = FilterFieldsetItem | BaseItem | MultiRangeItem;
