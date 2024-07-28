import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Orders', table => {
    table.increments('order_id').primary();
    table.integer('device_id').unsigned().notNullable().references('device_id').inTable('Devices').onDelete('CASCADE');
    table.integer('customer_id').unsigned().notNullable().references('customer_id').inTable('Customers').onDelete('CASCADE');
    table.timestamp('order_start').notNullable().defaultTo(knex.fn.now());
    table.timestamp('order_end').nullable();
    table.boolean('order_status').defaultTo(false);  // false = active, true = closed
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Orders');
}
