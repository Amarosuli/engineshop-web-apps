// THIS FILE ONLY FOR REVERSE PROXY USE - NGINX

import { handler } from './release/handler.js';
import express from 'express';

const PORT = 201;
const app = express();
const router = express.Router();

router.use('/engineshop', handler);
app.use('/', router);
app.listen(PORT, () => {
   console.log(`running on port ${PORT}`);
});
