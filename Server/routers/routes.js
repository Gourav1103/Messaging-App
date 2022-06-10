import express from "express";

import { addMessages, getAllMessages } from "../controller/message-controller.js";
import { userLogin,getusers } from "../controller/user-controller.js";
// import { getProducts , getProductById} from "../controller/product-contrller.js";
// import {addPaymentGateway,paymentresponse} from '../controller/payment-controller.js';
const router = express.Router();
// router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/channel-list');
router.post('/message');
router.get('/users',getusers)
router.post('/addmes',addMessages);
router.post('/getmessage',getAllMessages);
// router.get('/products',getProducts);
// router.get('/product/:id',getProductById);
// router.post('/payment',addPaymentGateway);
// router.post('/callback',paymentresponse);
export default router;