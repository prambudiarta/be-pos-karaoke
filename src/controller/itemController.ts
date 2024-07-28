import { Request, Response } from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  Item
} from '../model/itemModel';

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item_id = parseInt(req.params.id, 10);
    const item = await getItemById(item_id);

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const newItem: Item = req.body;
    const item_id = await createItem(newItem);
    res.status(201).json({ item_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item_id = parseInt(req.params.id, 10);
    const updatedItem: Partial<Item> = req.body;
    const updated = await updateItem(item_id, updatedItem);

    if (updated) {
      res.status(200).json({ message: 'Item updated successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item_id = parseInt(req.params.id, 10);
    const deleted = await deleteItem(item_id);

    if (deleted) {
      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getItems,
  getItem,
  createNewItem,
  updateExistingItem,
  deleteExistingItem
};
