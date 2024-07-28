import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Items', table => {
    table.increments('item_id').primary();
    table.string('item_name').notNullable();
    table.decimal('item_price', 10, 2).notNullable();
    table.string('item_picture').nullable(); // URL or base64 string
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Items');
}
