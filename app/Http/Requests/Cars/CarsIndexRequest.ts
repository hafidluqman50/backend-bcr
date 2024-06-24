import { CarsIndexDTO } from "@DTOs/Cars/CarsIndexDTO";

export class CarsIndexRequest {
  
  protected request: any
  
  constructor(request: any) {
    this.request = request
  }
  
  public validator(): void {
    //
  }
  
  public toDTO(): CarsIndexDTO {
    this.validator()
    
    return new CarsIndexDTO(this.request)
  }
}