import { Request, Response } from 'express';
import {
  getAllBundles,
  getBundleById,
  createBundle,
  updateBundle,
  deleteBundle,
  Bundle
} from '../model/bundleModel';

const getBundles = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundles = await getAllBundles();
    res.status(200).json(bundles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBundle = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_id = parseInt(req.params.id, 10);
    const bundle = await getBundleById(bundle_id);

    if (bundle) {
      res.status(200).json(bundle);
    } else {
      res.status(404).json({ message: 'Bundle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewBundle = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBundle: Bundle = req.body;
    const bundle_id = await createBundle(newBundle);
    res.status(201).json({ bundle_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingBundle = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_id = parseInt(req.params.id, 10);
    const updatedBundle: Partial<Bundle> = req.body;
    const updated = await updateBundle(bundle_id, updatedBundle);

    if (updated) {
      res.status(200).json({ message: 'Bundle updated successfully' });
    } else {
      res.status(404).json({ message: 'Bundle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingBundle = async (req: Request, res: Response): Promise<void> => {
  try {
    const bundle_id = parseInt(req.params.id, 10);
    const deleted = await deleteBundle(bundle_id);

    if (deleted) {
      res.status(200).json({ message: 'Bundle deleted successfully' });
    } else {
      res.status(404).json({ message: 'Bundle not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getBundles,
  getBundle,
  createNewBundle,
  updateExistingBundle,
  deleteExistingBundle
};
