import { Request, Response } from 'express';
import {
  getAllDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice,
  Device
} from '../model/deviceModel';

const getDevices = async (req: Request, res: Response): Promise<void> => {
  try {
    const devices = await getAllDevices();
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDevice = async (req: Request, res: Response): Promise<void> => {
  try {
    const device_id = parseInt(req.params.id, 10);
    const device = await getDeviceById(device_id);

    if (device) {
      res.status(200).json(device);
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewDevice = async (req: Request, res: Response): Promise<void> => {
  try {
    const newDevice: Device = req.body;
    const device_id = await createDevice(newDevice);
    res.status(201).json({ device_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingDevice = async (req: Request, res: Response): Promise<void> => {
  try {
    const device_id = parseInt(req.params.id, 10);
    const updatedDevice: Partial<Device> = req.body;
    const updated = await updateDevice(device_id, updatedDevice);

    if (updated) {
      res.status(200).json({ message: 'Device updated successfully' });
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingDevice = async (req: Request, res: Response): Promise<void> => {
  try {
    const device_id = parseInt(req.params.id, 10);
    const deleted = await deleteDevice(device_id);

    if (deleted) {
      res.status(200).json({ message: 'Device deleted successfully' });
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getDevices,
  getDevice,
  createNewDevice,
  updateExistingDevice,
  deleteExistingDevice
};
