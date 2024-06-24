export class UserStoreDTO {
  public name: string
  public email: string
  public password: string
  public role: string
  public created_at: Date
  public updated_at: Date
  
  constructor(data: any) {
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.role = data.role
    this.created_at = data.created_at
    this.updated_at = data.created_at
  }
}