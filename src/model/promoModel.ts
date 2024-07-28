import db from '../config/db';

interface Promo {
  promo_id?: number;
  promo_code: string;
  promo_description: string;
  promo_discount: number;
  start_time: string;
  end_time: string;
}

const getAllPromos = async (): Promise<Promo[]> => {
  return db<Promo>('Promos').select('*');
};

const getPromoById = async (promo_id: number): Promise<Promo | undefined> => {
  return db<Promo>('Promos').where({ promo_id }).first();
};

const createPromo = async (promo: Promo): Promise<number[]> => {
  return db<Promo>('Promos').insert(promo);
};

const updatePromo = async (promo_id: number, promo: Partial<Promo>): Promise<number> => {
  return db<Promo>('Promos').where({ promo_id }).update(promo);
};

const deletePromo = async (promo_id: number): Promise<number> => {
  return db<Promo>('Promos').where({ promo_id }).del();
};

export {
  Promo,
  getAllPromos,
  getPromoById,
  createPromo,
  updatePromo,
  deletePromo,
};
