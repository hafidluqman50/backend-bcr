
export class CarsAvailableDTO {
  public name?: string|null
  public typeDriver?: string|null
  public dateRent?: string|null
  public timeRent?: string|null
  public seat?: number|null
  
  constructor(data: any) {
    this.name       = data.name
    this.typeDriver = data.type_driver
    this.dateRent   = data.date_rent
    this.timeRent   = data.time_rent
    this.seat       = data.seat
  }
}