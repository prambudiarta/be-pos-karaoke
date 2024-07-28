import db from '../config/db';

interface Bundle {
  bundle_id?: number;
  bundle_name: string;
  bundle_description: string;
  bundle_price: number;
}

const getAllBundles = async (): Promise<Bundle[]> => {
  return db<Bundle>('Bundles').select('*');
};

const getBundleById = async (bundle_id: number): Promise<Bundle | undefined> => {
  return db<Bundle>('Bundles').where({ bundle_id }).first();
};

const createBundle = async (bundle: Bundle): Promise<number[]> => {
  return db<Bundle>('Bundles').insert(bundle);
};

const updateBundle = async (bundle_id: number, bundle: Partial<Bundle>): Promise<number> => {
  return db<Bundle>('Bundles').where({ bundle_id }).update(bundle);
};

const deleteBundle = async (bundle_id: number): Promise<number> => {
  return db<Bundle>('Bundles').where({ bundle_id }).del();
};

export {
  Bundle,
  getAllBundles,
  getBundleById,
  createBundle,
  updateBundle,
  deleteBundle,
};
