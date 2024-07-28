import db from '../config/db';

interface Device {
  device_id?: number;
  device_name: string;
  room_rate_weekday: number;
  room_rate_weekend: number;
}

const getAllDevices = async (): Promise<Device[]> => {
  return db<Device>('Devices').select('*');
};

const getDeviceById = async (device_id: number): Promise<Device | undefined> => {
  return db<Device>('Devices').where({ device_id }).first();
};

const createDevice = async (device: Device): Promise<number[]> => {
  return db<Device>('Devices').insert(device);
};

const updateDevice = async (device_id: number, device: Partial<Device>): Promise<number> => {
  return db<Device>('Devices').where({ device_id }).update(device);
};

const deleteDevice = async (device_id: number): Promise<number> => {
  return db<Device>('Devices').where({ device_id }).del();
};

export {
  Device,
  getAllDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice,
};
