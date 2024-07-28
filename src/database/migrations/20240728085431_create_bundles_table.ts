import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Bundles', table => {
    table.increments('bundle_id').primary();
    table.string('bundle_name').notNullable();
    table.integer('bundle_price').notNullable();
    table.string('bundle_picture').nullable(); // URL or base64 string
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Bundles');
}
