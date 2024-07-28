import db from '../config/db';

interface BundleItem {
  bundle_item_id?: number;
  bundle_id: number;
  item_id: number;
}

const getAllBundleItems = async (): Promise<BundleItem[]> => {
  return db<BundleItem>('BundleItems').select('*');
};

const getBundleItemById = async (bundle_item_id: number): Promise<BundleItem | undefined> => {
  return db<BundleItem>('BundleItems').where({ bundle_item_id }).first();
};

const createBundleItem = async (bundleItem: BundleItem): Promise<number[]> => {
  return db<BundleItem>('BundleItems').insert(bundleItem);
};

const updateBundleItem = async (bundle_item_id: number, bundleItem: Partial<BundleItem>): Promise<number> => {
  return db<BundleItem>('BundleItems').where({ bundle_item_id }).update(bundleItem);
};

const deleteBundleItem = async (bundle_item_id: number): Promise<number> => {
  return db<BundleItem>('BundleItems').where({ bundle_item_id }).del();
};

export {
  BundleItem,
  getAllBundleItems,
  getBundleItemById,
  createBundleItem,
  updateBundleItem,
  deleteBundleItem,
};
