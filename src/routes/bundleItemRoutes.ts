import { Router } from 'express';
import {
  getBundleItems,
  getBundleItem,
  createNewBundleItem,
  updateExistingBundleItem,
  deleteExistingBundleItem
} from '../controller/bundleItemController';

const router = Router();

router.get('/bundleItems', getBundleItems);
router.get('/bundleItems/:id', getBundleItem);
router.post('/bundleItems', createNewBundleItem);
router.put('/bundleItems/:id', updateExistingBundleItem);
router.delete('/bundleItems/:id', deleteExistingBundleItem);

export default router;
