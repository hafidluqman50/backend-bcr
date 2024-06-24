import { Model, ModelObject } from 'objection'

class Car extends Model {
  
  static tableName = 'cars'
  
  id!: number;
  name!:string;
  price!:number;
  picture!:string;
  start_rent!:string;
  finish_rent!:string;
  available!: number;
  type_car!:string;
  transmission!:string;
  seat!:number;
  type_driver!:string;
  year!:number;
  description!:string;
  created_at?:Date | string | null;
  updated_at?:Date | string | null;
  deleted_at?:Date | string | null;
}

type CarType = ModelObject<Car>;

export {
  Car,
  CarType
}