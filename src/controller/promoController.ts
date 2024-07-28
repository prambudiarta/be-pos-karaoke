import { Request, Response } from 'express';
import {
  getAllPromos,
  getPromoById,
  createPromo,
  updatePromo,
  deletePromo,
  Promo
} from '../model/promoModel';

const getPromos = async (req: Request, res: Response): Promise<void> => {
  try {
    const promos = await getAllPromos();
    res.status(200).json(promos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPromo = async (req: Request, res: Response): Promise<void> => {
  try {
    const promo_id = parseInt(req.params.id, 10);
    const promo = await getPromoById(promo_id);

    if (promo) {
      res.status(200).json(promo);
    } else {
      res.status(404).json({ message: 'Promo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewPromo = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPromo: Promo = req.body;
    const promo_id = await createPromo(newPromo);
    res.status(201).json({ promo_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingPromo = async (req: Request, res: Response): Promise<void> => {
  try {
    const promo_id = parseInt(req.params.id, 10);
    const updatedPromo: Partial<Promo> = req.body;
    const updated = await updatePromo(promo_id, updatedPromo);

    if (updated) {
      res.status(200).json({ message: 'Promo updated successfully' });
    } else {
      res.status(404).json({ message: 'Promo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingPromo = async (req: Request, res: Response): Promise<void> => {
  try {
    const promo_id = parseInt(req.params.id, 10);
    const deleted = await deletePromo(promo_id);

    if (deleted) {
      res.status(200).json({ message: 'Promo deleted successfully' });
    } else {
      res.status(404).json({ message: 'Promo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getPromos,
  getPromo,
  createNewPromo,
  updateExistingPromo,
  deleteExistingPromo
};
