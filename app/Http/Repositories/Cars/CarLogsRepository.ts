import { CarLog } from '@Models/CarLog'
import { AnyQueryBuilder } from 'objection'
import { CarsDeleteDTO } from '@DTOs/Cars/CarsDeleteDTO'
import { CarsStoreDTO } from '@DTOs/Cars/CarsStoreDTO'
import { CarsUpdateDTO } from '@DTOs/Cars/CarsUpdateDTO'

export class CarLogsRepository {
  public async getCarLogs(): Promise<CarLog[]> {
    return await CarLog.query().select('log_time', 'type_action').withGraphFetched('[car(selectCar), user(selectUser)]').modifiers({
      selectCar: (builder: AnyQueryBuilder) => {
        builder.select('id','name')
      },
      selectUser: (builder: AnyQueryBuilder) => {
        builder.select('id','name','email')
      }
    })
  }
  
  public async insertLogs(dto: CarsStoreDTO | CarsUpdateDTO | CarsDeleteDTO): Promise<CarLog> {
    return await CarLog.query().insert({
      car_id: dto.car_id,
      log_time: dto.log_time,
      type_action: dto.type_action,
      user_id: dto.user_id,
    })
  }
}