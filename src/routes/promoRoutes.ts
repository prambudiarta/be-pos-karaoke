import { Router } from 'express';
import {
  getPromos,
  getPromo,
  createNewPromo,
  updateExistingPromo,
  deleteExistingPromo
} from '../controller/promoController';

const router = Router();

router.get('/promos', getPromos);
router.get('/promos/:id', getPromo);
router.post('/promos', createNewPromo);
router.put('/promos/:id', updateExistingPromo);
router.delete('/promos/:id', deleteExistingPromo);

export default router;
