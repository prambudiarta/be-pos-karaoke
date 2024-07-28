import db from '../config/db';

interface Rate {
  rate_id?: number;
  device_id: number;
  rate_type: string;
  rate_amount: number;
  start_time: string;
  end_time: string;
}

const getAllRates = async (): Promise<Rate[]> => {
  return db<Rate>('Rates').select('*');
};

const getRateById = async (rate_id: number): Promise<Rate | undefined> => {
  return db<Rate>('Rates').where({ rate_id }).first();
};

const createRate = async (rate: Rate): Promise<number[]> => {
  return db<Rate>('Rates').insert(rate);
};

const updateRate = async (rate_id: number, rate: Partial<Rate>): Promise<number> => {
  return db<Rate>('Rates').where({ rate_id }).update(rate);
};

const deleteRate = async (rate_id: number): Promise<number> => {
  return db<Rate>('Rates').where({ rate_id }).del();
};

export {
  Rate,
  getAllRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate,
};
