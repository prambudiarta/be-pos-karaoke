import db from '../config/db';

interface Customer {
  customer_id?: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
}

const getAllCustomers = async (): Promise<Customer[]> => {
  return db<Customer>('Customers').select('*');
};

const getCustomerById = async (customer_id: number): Promise<Customer | undefined> => {
  return db<Customer>('Customers').where({ customer_id }).first();
};

const createCustomer = async (customer: Customer): Promise<number[]> => {
  return db<Customer>('Customers').insert(customer);
};

const updateCustomer = async (customer_id: number, customer: Partial<Customer>): Promise<number> => {
  return db<Customer>('Customers').where({ customer_id }).update(customer);
};

const deleteCustomer = async (customer_id: number): Promise<number> => {
  return db<Customer>('Customers').where({ customer_id }).del();
};

export {
  Customer,
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
