import db from '../config/db';

interface Order {
  order_id?: number;
  customer_id: number;
  device_id: number;
  start_time: string;
  end_time?: string;
  status: string;
}

const getAllOrders = async (): Promise<Order[]> => {
  return db<Order>('Orders').select('*');
};

const getOrderById = async (order_id: number): Promise<Order | undefined> => {
  return db<Order>('Orders').where({ order_id }).first();
};

const createOrder = async (order: Order): Promise<number[]> => {
  return db<Order>('Orders').insert(order);
};

const updateOrder = async (order_id: number, order: Partial<Order>): Promise<number> => {
  return db<Order>('Orders').where({ order_id }).update(order);
};

const deleteOrder = async (order_id: number): Promise<number> => {
  return db<Order>('Orders').where({ order_id }).del();
};

export {
  Order,
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
