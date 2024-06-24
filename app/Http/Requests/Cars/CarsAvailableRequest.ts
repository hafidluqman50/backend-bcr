import { CarsAvailableDTO } from "@DTOs/Cars/CarsAvailableDTO";

export class CarsAvailableRequest {
  
  protected request: any
  
  constructor(request: any) {
    this.request = request
  }
  
  public validator(): void {
    //
  }
  
  public toDTO(): CarsAvailableDTO {
    this.validator()
    
    return new CarsAvailableDTO(this.request)
  }
}