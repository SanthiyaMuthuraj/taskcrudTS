
import mongoose, { Document } from 'mongoose';

export interface Customer {
  id?: number;
  customerName: string;
  location: string;
  phoneNumber: number;
  email: string;
  notes: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerModel extends Customer, Document {
  id?: number;}

const customerSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  customerName: { type: String, required: true },
  location: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  notes: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<CustomerModel>('Customer', customerSchema);
