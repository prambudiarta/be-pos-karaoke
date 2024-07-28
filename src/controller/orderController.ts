import { Request, Response } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  Order
} from '../model/orderModel';

const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order_id = parseInt(req.params.id, 10);
    const order = await getOrderById(order_id);

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const newOrder: Order = req.body;
    const order_id = await createOrder(newOrder);
    res.status(201).json({ order_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order_id = parseInt(req.params.id, 10);
    const updatedOrder: Partial<Order> = req.body;
    const updated = await updateOrder(order_id, updatedOrder);

    if (updated) {
      res.status(200).json({ message: 'Order updated successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order_id = parseInt(req.params.id, 10);
    const deleted = await deleteOrder(order_id);

    if (deleted) {
      res.status(200).json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getOrders,
  getOrder,
  createNewOrder,
  updateExistingOrder,
  deleteExistingOrder
};
