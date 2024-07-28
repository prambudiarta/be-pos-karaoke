import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Promos', table => {
    table.increments('promo_id').primary();
    table.string('promo_code').notNullable().unique();
    table.integer('discount_amount').notNullable();
    table.timestamp('valid_from').notNullable().defaultTo(knex.fn.now());
    table.timestamp('valid_until').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Promos');
}
