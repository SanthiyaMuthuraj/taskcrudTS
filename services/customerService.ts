import CustomerModel, { Customer, CustomerModel as CustomerModelType } from '../models/customerModel';

class CustomerService {
  async getAllCustomers(): Promise<CustomerModelType[]> {
    return CustomerModel.find();
  }

  async getCustomerById(id: number): Promise<CustomerModelType | null> {
    return CustomerModel.findOne({ id });
  }
  async getCustomerByName(customerName: string): Promise<CustomerModelType | null> {
    return CustomerModel.findOne({ customerName });
  }

  async getCustomerByLocation(location: string): Promise<CustomerModelType[] | null> {
    return CustomerModel.find({ location });
  }
  async createCustomer(customerData: Customer): Promise<CustomerModelType> {
    return CustomerModel.create(customerData);
  }

  async updateCustomer(id: number, customerData: Customer): Promise<CustomerModelType | null> {
    return CustomerModel.findOneAndUpdate({ id }, customerData, { new: true });
  }

  async deleteCustomer(id: number): Promise<CustomerModelType | null> {
    return CustomerModel.findOneAndDelete({ id });
  }
}

export default new CustomerService();
