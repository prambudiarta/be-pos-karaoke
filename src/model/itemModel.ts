import db from '../config/db';

interface Item {
  item_id?: number;
  item_name: string;
  item_price: number;
  item_picture: string;
}

const getAllItems = async (): Promise<Item[]> => {
  return db<Item>('Items').select('*');
};

const getItemById = async (item_id: number): Promise<Item | undefined> => {
  return db<Item>('Items').where({ item_id }).first();
};

const createItem = async (item: Item): Promise<number[]> => {
  return db<Item>('Items').insert(item);
};

const updateItem = async (item_id: number, item: Partial<Item>): Promise<number> => {
  return db<Item>('Items').where({ item_id }).update(item);
};

const deleteItem = async (item_id: number): Promise<number> => {
  return db<Item>('Items').where({ item_id }).del();
};

export {
  Item,
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
