
export class CarsIndexDTO {
  public search: string
  
  constructor(data: any) {
    this.search = data.search
  }
}