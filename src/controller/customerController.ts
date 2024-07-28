import { Request, Response } from 'express';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  Customer
} from '../model/customerModel';

const getCustomers = async (req: Request, res: Response): Promise<void> => {
  try {
    const customers = await getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const customer_id = parseInt(req.params.id, 10);
    const customer = await getCustomerById(customer_id);

    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCustomer: Customer = req.body;
    const customer_id = await createCustomer(newCustomer);
    res.status(201).json({ customer_id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExistingCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const customer_id = parseInt(req.params.id, 10);
    const updatedCustomer: Partial<Customer> = req.body;
    const updated = await updateCustomer(customer_id, updatedCustomer);

    if (updated) {
      res.status(200).json({ message: 'Customer updated successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExistingCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const customer_id = parseInt(req.params.id, 10);
    const deleted = await deleteCustomer(customer_id);

    if (deleted) {
      res.status(200).json({ message: 'Customer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getCustomers,
  getCustomer,
  createNewCustomer,
  updateExistingCustomer,
  deleteExistingCustomer
};
