import express from 'express'
import { paymentIntent } from '../controllers/payment.js';

const router = express.Router();

router.post('/checkout_session',paymentIntent);

export default router;