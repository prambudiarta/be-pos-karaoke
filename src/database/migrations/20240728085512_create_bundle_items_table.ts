import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('BundleItems', table => {
    table.increments('bundle_item_id').primary();
    table.integer('bundle_id').unsigned().notNullable().references('bundle_id').inTable('Bundles').onDelete('CASCADE');
    table.integer('item_id').unsigned().notNullable().references('item_id').inTable('Items').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('BundleItems');
}
