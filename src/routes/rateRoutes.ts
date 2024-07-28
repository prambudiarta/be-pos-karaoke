import { Router } from 'express';
import {
  getRates,
  getRate,
  createNewRate,
  updateExistingRate,
  deleteExistingRate
} from '../controller/rateController';

const router = Router();

router.get('/rates', getRates);
router.get('/rates/:id', getRate);
router.post('/rates', createNewRate);
router.put('/rates/:id', updateExistingRate);
router.delete('/rates/:id', deleteExistingRate);

export default router;
