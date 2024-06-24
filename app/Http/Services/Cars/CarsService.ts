import { Car } from '@Models/Car'
import { CarsRepository } from '@Repositories/Cars/CarsRepository'
import {
  cloudinary,
  UploadApiResponse
} from '@config/cloudinary'
import { ServerErrorException } from '@Exceptions/ServerErrorException'
import { Exception } from '@Exceptions/Exception'
import { NotFoundException } from '@Exceptions/NotFoundException'
import { CarsStoreDTO } from '@DTOs/Cars/CarsStoreDTO'
import { CarsUpdateDTO } from '@DTOs/Cars/CarsUpdateDTO'
import { CarsDeleteDTO } from '@DTOs/Cars/CarsDeleteDTO'
import { CarLogsRepository } from '@Repositories/Cars/CarLogsRepository'
import { CarLog } from '@Models/CarLog'
import { CarsIndexDTO } from '@DTOs/Cars/CarsIndexDTO'
import { CarsAvailableDTO } from '@DTOs/Cars/CarsAvailableDTO'

export class CarsService {
  
  public carsRepository: CarsRepository
  public carLogRepository: CarLogsRepository
  
  constructor(
    carsRepository: CarsRepository,
    carLogRepository: CarLogsRepository
  ) {
    this.carsRepository = carsRepository
    this.carLogRepository = carLogRepository
  }
  
  public async getAll(dto: CarsIndexDTO): Promise<Car[]> {
    return await this.carsRepository.getAll(dto)
  }
  
  public async getById(id: number): Promise<Car | undefined> {
    const carById: Car | undefined = await this.carsRepository.getById(id)
    
    if(carById === undefined) {
      throw new NotFoundException('Data Car Not Found!', {})
    } else {
      return carById 
    }
  }
  
  public async insert(
    dto: CarsStoreDTO, 
    file: string
  ): Promise<void> {
    try {
      
      const cloudinaryUpload: UploadApiResponse = await cloudinary.uploader.upload(file, {
          folder: 'fsw',
          use_filename: true
      })
          
      dto.picture = cloudinaryUpload?.secure_url
      
      const insertGetId: Car = await this.carsRepository.insert(dto)
      
      dto.car_id = insertGetId.id
      
      await this.carLogRepository.insertLogs(dto)
      
    } catch(error) {
      if(error instanceof Exception) {
          throw new Exception(error.message, error.statusCode, {})
      } else {
          throw new ServerErrorException((error as Error).message, {})
      }
    }
    
  }
  
  public async update(
    id: number, 
    dto: CarsUpdateDTO, 
    file: string
  ): Promise<void> {
    
    try {
      await this.getById(id)
      
      const cloudinaryUpload: UploadApiResponse = await cloudinary.uploader.upload(file, {
          folder: 'fsw',
          use_filename: true
      })

      dto.picture = cloudinaryUpload?.secure_url
      
      await this.carsRepository.update(id, dto)
      
      dto.car_id = id
      
      await this.carLogRepository.insertLogs(dto)
      
    } catch(error) {
      if(error instanceof Exception) {
        throw new Exception(error.message, error.statusCode, {})
      } else {
        throw new ServerErrorException((error as Error).message, {})
      }
    }
    
  }
  
  public async delete(id: number, dto: CarsDeleteDTO): Promise<void> {
    try {
      await this.getById(id)
      
      await this.carsRepository.delete(id)
      
      await this.carLogRepository.insertLogs(dto)
    } catch(error) {
      if(error instanceof Exception) {
        throw new Exception(error.message, error.statusCode, {})
      } else {
        throw new ServerErrorException((error as Error).message, {})
      }
    }
  }
  
  public async getListAvailable(dto: CarsAvailableDTO): Promise<Car[]> {
    return await this.carsRepository.getListAvailable(dto)
  }
  
  public async getListAvailableById(id: number): Promise<Car | undefined> {
    return await this.carsRepository.getListAvailableById(id)
  }
  
  public async getCarLogs(): Promise<CarLog[]> {
    return await this.carLogRepository.getCarLogs()
  }
}