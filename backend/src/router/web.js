import express from 'express';
import userRouter from './userRoute.js';
import categoryRouter from './categoryRouter.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/users', userRouter);
router.use('/category', categoryRouter);


export default router;