import { Router } from 'express';
import {
  getCustomers,
  getCustomer,
  createNewCustomer,
  updateExistingCustomer,
  deleteExistingCustomer
} from '../controller/customerController';

const router = Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomer);
router.post('/customers', createNewCustomer);
router.put('/customers/:id', updateExistingCustomer);
router.delete('/customers/:id', deleteExistingCustomer);

export default router;
