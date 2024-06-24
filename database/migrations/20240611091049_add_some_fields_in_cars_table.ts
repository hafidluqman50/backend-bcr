import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('cars', (table: Knex.AlterTableBuilder) => {
    table.string('type_car')
    table.string('transmission')
    table.integer('seat')
    table.enum('type_driver', ['dengan-sopir', 'tanpa-sopir'])
    table.integer('year')
    table.text('description')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('cars', (table: Knex.AlterTableBuilder) => {
    table.dropColumns('type_car', 'transmission', 'seat', 'type_driver', 'year', 'description')
  })
}

