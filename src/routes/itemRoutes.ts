import { Router } from 'express';
import {
  getItems,
  getItem,
  createNewItem,
  updateExistingItem,
  deleteExistingItem
} from '../controller/itemController';

const router = Router();

router.get('/items', getItems);
router.get('/items/:id', getItem);
router.post('/items', createNewItem);
router.put('/items/:id', updateExistingItem);
router.delete('/items/:id', deleteExistingItem);

export default router;
