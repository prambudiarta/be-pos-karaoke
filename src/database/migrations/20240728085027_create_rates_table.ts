import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Rates', table => {
    table.increments('rate_id').primary();
    table.integer('device_id').unsigned().notNullable().references('device_id').inTable('Devices').onDelete('CASCADE');
    table.string('rate_type').notNullable();
    table.integer('rate_amount', 10).notNullable();
    table.timestamp('start_time').notNullable().defaultTo(knex.fn.now());
    table.timestamp('end_time').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Rates');
}
