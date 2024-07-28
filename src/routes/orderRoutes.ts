import { Router } from 'express';
import {
  getOrders,
  getOrder,
  createNewOrder,
  updateExistingOrder,
  deleteExistingOrder
} from '../controller/orderController';

const router = Router();

router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.post('/orders', createNewOrder);
router.put('/orders/:id', updateExistingOrder);
router.delete('/orders/:id', deleteExistingOrder);

export default router;
