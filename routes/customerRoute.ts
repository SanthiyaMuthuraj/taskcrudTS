
import { Router } from 'express';
import CustomerController from '../controllers/customerController';

const router = Router();

router.get('/', CustomerController.getAllCustomers);
router.get('/:id', CustomerController.getCustomerById);
router.post('/', CustomerController.createCustomer);
router.put('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);
router.get('/name/:customerName', CustomerController.getCustomerByName);
router.get('/location/:location', CustomerController.getCustomerByLocation);

export default router;
