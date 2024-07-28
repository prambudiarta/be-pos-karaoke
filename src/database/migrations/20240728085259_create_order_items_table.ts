import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('OrderItems', table => {
    table.increments('order_item_id').primary();
    table.integer('order_id').unsigned().notNullable().references('order_id').inTable('Orders').onDelete('CASCADE');
    table.integer('item_id').unsigned().notNullable().references('item_id').inTable('Items').onDelete('CASCADE');
    table.integer('quantity').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('OrderItems');
}
