import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('cars').del();

    // Inserts seed entries
    await knex('cars').insert([
        { 
          name: "Honda Camry", 
          type_car: 'Sport Car',
          price:50000000, 
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715849971/fsw/i9w2bvzhkv3n5h7suew3.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          transmission: 'Manual',
          seat:4,
          type_driver: 'dengan-sopir',
          year: 2024,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nostrum, tenetur, exercitationem suscipit saepe tempora aspernatur, autem alias obcaecati non ipsum doloremque. Voluptatum, recusandae! Accusantium non optio molestiae porro minima?',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        },
        { 
          name: "Bugatti Veyron", 
          price: 70000000, 
          type_car: 'Sport Car',
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715850166/fsw/yn7lfl9i4ok7dp8kiogs.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          transmission: 'Manual',
          seat:2,
          type_driver: 'tanpa-sopir',
          year: 2024,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nostrum, tenetur, exercitationem suscipit saepe tempora aspernatur, autem alias obcaecati non ipsum doloremque. Voluptatum, recusandae! Accusantium non optio molestiae porro minima?',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        },
        { 
          name: "Ferrari 458 Italy", 
          price: 5774000,
          type_car: 'Sport Car',
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715850490/fsw/lha70u5wfv8aqyab7xr0.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          transmission: 'Manual',
          seat:2,
          type_driver: 'tanpa-sopir',
          year: 2024,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nostrum, tenetur, exercitationem suscipit saepe tempora aspernatur, autem alias obcaecati non ipsum doloremque. Voluptatum, recusandae! Accusantium non optio molestiae porro minima?',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        }
    ]);
};
