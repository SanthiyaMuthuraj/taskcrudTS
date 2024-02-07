// controllers/customer.controller.ts
import { Request, Response } from 'express';
import CustomerService from '../services/customerService';

class CustomerController {
  async getAllCustomers(req: Request, res: Response): Promise<void> {
    try {
      const customers = await CustomerService.getAllCustomers();
      res.json(customers);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  async getCustomerByName(req: Request, res: Response): Promise<void> {
    try {
      const customerName = req.params.customerName;
      const customer = await CustomerService.getCustomerByName(customerName);
      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCustomerByLocation(req: Request, res: Response): Promise<void> {
    try {
      const location = req.params.location;
      const customers = await CustomerService.getCustomerByLocation(location);
      if (customers && customers.length > 0) {
        res.json(customers);
      } else {
        res.status(404).json({ error: 'Customers not found at the specified location' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  async getCustomerById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const customer = await CustomerService.getCustomerById(id);
      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCustomer(req: Request, res: Response): Promise<void> {
    try {
      const customerData = req.body;
      const createdCustomer = await CustomerService.createCustomer(customerData);
      res.json(createdCustomer);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCustomer(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const customerData = req.body;
      const updatedCustomer = await CustomerService.updateCustomer(id, customerData);
      if (updatedCustomer) {
        res.json(updatedCustomer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCustomer(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedCustomer = await CustomerService.deleteCustomer(id);
      if (deletedCustomer) {
        res.json(deletedCustomer);
      } else {
        res.status(404).json({ error: 'Customer not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CustomerController();
