import { Request, Response } from 'express';
import {
  getAllRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate,
  Rate
} from '../model/rateModel';

const getRates = async (req: Request, res: Response): Promise<void> => {
  try {
    const rates = await getAllRates();
    res.status(200).json(rates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const rate_id = parseInt(req.params.id, 10);
    const rate = await getRateById(rate_id);

    if (rate) {
      res.status(200).json(rate);
    } else {
      res.status(404).json({ message: 'Rate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRate: Rate = req.body;
    const rate_id = await createRate(newRate);
    res.status(201).json({ rate_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const rate_id = parseInt(req.params.id, 10);
    const updatedRate: Partial<Rate> = req.body;
    const updated = await updateRate(rate_id, updatedRate);

    if (updated) {
      res.status(200).json({ message: 'Rate updated successfully' });
    } else {
      res.status(404).json({ message: 'Rate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingRate = async (req: Request, res: Response): Promise<void> => {
  try {
    const rate_id = parseInt(req.params.id, 10);
    const deleted = await deleteRate(rate_id);

    if (deleted) {
      res.status(200).json({ message: 'Rate deleted successfully' });
    } else {
      res.status(404).json({ message: 'Rate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getRates,
  getRate,
  createNewRate,
  updateExistingRate,
  deleteExistingRate
};
