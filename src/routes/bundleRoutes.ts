import { Router } from 'express';
import {
  getBundles,
  getBundle,
  createNewBundle,
  updateExistingBundle,
  deleteExistingBundle
} from '../controller/bundleController';

const router = Router();

router.get('/bundles', getBundles);
router.get('/bundles/:id', getBundle);
router.post('/bundles', createNewBundle);
router.put('/bundles/:id', updateExistingBundle);
router.delete('/bundles/:id', deleteExistingBundle);

export default router;
