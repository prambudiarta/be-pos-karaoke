import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Devices', table => {
    table.increments('device_id').primary();
    table.string('device_name').notNullable();
    table.integer('room_rate_weekday').notNullable();
    table.integer('room_rate_weekend').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Devices');
}