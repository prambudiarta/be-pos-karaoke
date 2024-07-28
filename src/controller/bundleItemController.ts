import { Request, Response } from 'express';
import {
  getAllBundleItems,
  getBundleItemById,
  createBundleItem,
  updateBundleItem,
  deleteBundleItem,
  BundleItem
} from '../model/bundleItemModel';

const getBundleItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundleItems = await getAllBundleItems();
    res.status(200).json(bundleItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBundleItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_item_id = parseInt(req.params.id, 10);
    const bundleItem = await getBundleItemById(bundle_item_id);

    if (bundleItem) {
      res.status(200).json(bundleItem);
    } else {
      res.status(404).json({ message: 'Bundle item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewBundleItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBundleItem: BundleItem = req.body;
    const bundle_item_id = await createBundleItem(newBundleItem);
    res.status(201).json({ bundle_item_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingBundleItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_item_id = parseInt(req.params.id, 10);
    const updatedBundleItem: Partial<BundleItem> = req.body;
    const updated = await updateBundleItem(bundle_item_id, updatedBundleItem);

    if (updated) {
      res.status(200).json({ message: 'Bundle item updated successfully' });
    } else {
      res.status(404).json({ message: 'Bundle item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingBundleItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_item_id = parseInt(req.params.id, 10);
    const deleted = await deleteBundleItem(bundle_item_id);

    if (deleted) {
      res.status(200).json({ message: 'Bundle item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Bundle item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getBundleItems,
  getBundleItem,
  createNewBundleItem,
  updateExistingBundleItem,
  deleteExistingBundleItem
};
