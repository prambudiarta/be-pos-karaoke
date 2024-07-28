import { Router } from 'express';
import {
  getDevices,
  getDevice,
  createNewDevice,
  updateExistingDevice,
  deleteExistingDevice
} from '../controller/deviceController';

const router = Router();

router.get('/devices', getDevices);
router.get('/devices/:id', getDevice);
router.post('/devices', createNewDevice);
router.put('/devices/:id', updateExistingDevice);
router.delete('/devices/:id', deleteExistingDevice);

export default router;
