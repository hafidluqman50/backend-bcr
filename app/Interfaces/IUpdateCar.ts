export interface IUpdateCar {
  name:string;
  price:number;
  picture:any;
  start_rent:string;
  finish_rent:string;
  available: number;
  type_car:string;
  transmission:string;
  seat:number;
  type_driver:string;
  year:number;
  description:string;
  updated_at:Date;
  user_id: number
}