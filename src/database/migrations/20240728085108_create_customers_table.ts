import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Customers', table => {
    table.increments('customer_id').primary();
    table.string('customer_name').notNullable();
    table.string('customer_email').notNullable().unique();
    table.string('customer_phone').notNullable();
    table.string('membership_status').defaultTo('regular');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Customers');
}
