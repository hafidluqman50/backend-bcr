import type { ICreateCar } from '@Interfaces/ICreateCar'

export class CarsStoreDTO {
    public name: string
    public price: number
    public picture: any
    public start_rent: string
    public finish_rent: string
    public available: number
    public type_car: string
    public transmission: string
    public seat: number
    public type_driver: string
    public year: number
    public description: string
    public created_at: Date
    public user_id: number
    public car_id: number
    public log_time: Date
    public type_action: string
    
    constructor(data: ICreateCar) {
        this.name = data.name
        this.price = data.price
        this.picture = data.picture
        this.start_rent = data.start_rent
        this.finish_rent = data.finish_rent
        this.available = data.available
        this.type_car = data.type_car
        this.transmission = data.transmission
        this.seat = Number(data.seat)
        this.type_driver = data.type_driver
        this.year = Number(data.year)
        this.description = data.description
        this.created_at = data.created_at
        this.user_id = data.user_id
        this.car_id = 0
        this.log_time = data.created_at
        this.type_action = 'INSERT'
    }
    
    // public get _name(): string {
    //     return this.name
    // }
    // public set _name(name: string) {
    //     this.name = name;
    // }
    // public get _picture(): any {
    //     return this.picture;
    // }
    // public set _picture(picture: any) {
    //     this.picture = picture;
    // }
    // public get _price(): number {
    //     return this.price;
    // }
    // public set _price(price: number) {
    //     this.price = price;
    // }
    // public get _start_rent(): string {
    //     return this.start_rent;
    // }
    // public set _start_rent(start_rent: string) {
    //     this.start_rent = start_rent;
    // }
    // public get _finish_rent(): string {
    //     return this.finish_rent;
    // }
    // public set _finish_rent(finish_rent: string) {
    //     this.finish_rent = finish_rent;
    // }
    // public get _created_at(): Date {
    //     return this.created_at;
    // }
    // public set _created_at(created_at: Date) {
    //     this.created_at = created_at;
    // }
    
}