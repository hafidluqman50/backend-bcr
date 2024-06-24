import type { CarsAvailableDTO } from '@DTOs/Cars/CarsAvailableDTO'
import type { CarsIndexDTO } from '@DTOs/Cars/CarsIndexDTO'
import type { CarsStoreDTO } from '@DTOs/Cars/CarsStoreDTO'
import type { CarsUpdateDTO } from '@DTOs/Cars/CarsUpdateDTO'
import { Car } from '@Models/Car'

export class CarsRepository {
    public async getAll(dto: CarsIndexDTO): Promise<Car[]> {
        return await Car.query()
              .select('*')
              .whereILike('name', `%${dto.search}%`)
              .whereNull('deleted_at')
    }
    
    public async getById(id: number): Promise<Car | undefined> {
      return await Car.query().select('*').where('id', id).first()
    }
    
    public async insert(dto: CarsStoreDTO): Promise<Car> {
      return await Car.query().insert({
        name: dto.name,
        price: dto.price,
        picture: dto.picture,
        start_rent: dto.start_rent,
        finish_rent: dto.finish_rent,
        available: dto.available,
        type_car: dto.type_car,
        transmission: dto.transmission,
        seat: dto.seat,
        type_driver: dto.type_driver,
        year: dto.year,
        description: dto.description,
        created_at: dto.created_at,
        updated_at: dto.created_at
      }).returning('id')
    }
    
    public async update(id: number, dto: CarsUpdateDTO): Promise<number> {
      return await Car.query().where('id', id).update({
        name: dto.name,
        price: dto.price,
        picture: dto.picture,
        start_rent: dto.start_rent,
        finish_rent: dto.finish_rent,
        available: dto.available,
        type_car: dto.type_car,
        transmission: dto.transmission,
        seat: dto.seat,
        type_driver: dto.type_driver,
        year: dto.year,
        description: dto.description,
        updated_at: dto.updated_at
      })
    }
    
    public async delete(id: number): Promise<number> {
      return await Car.query().where('id', id).update({
        updated_at: new Date(),
        deleted_at: new Date()
      })
    }
    
    public async getListAvailable(dto: CarsAvailableDTO): Promise<Car[]> {
      if (dto.typeDriver != null && dto.dateRent != null && dto.timeRent != null) {
        if (dto.seat != null) {
          const dateTime = new Date(`${dto.dateRent}T${dto.timeRent}`).toISOString()
          return await Car.query()
              .where('start_rent', '>=', dateTime)
              .orWhere('finish_rent', '<', dateTime)
              .where('type_driver', dto.typeDriver)
              .where('seat', '<=', dto.seat)
              .where('available',1)
        }
        else {
          const dateTime = new Date(`${dto.dateRent}T${dto.timeRent}Z`).toISOString()
          return await Car.query()
              .where('start_rent', '>=', dateTime)
              .orWhere('finish_rent', '<', dateTime)
              .where('type_driver', dto.typeDriver)
              .where('available',1)
        }
      }
      else if (dto.name != null) {
        return await Car.query()
            .whereILike('name', `%${dto.name}%`)
            .where('available', 1)
      } else {
        return await Car.query()
              .where('available', 1)
      }
    }
    
    public async getListAvailableById(id: number): Promise<Car | undefined> {
      return await Car.query().where('id', id).where('available', 1).first()
    }
}