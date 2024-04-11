import express from 'express';
import Category from '../controller/CategoryController.js';
const categoryRouter = express.Router();
const cInstance = new Category();

categoryRouter.get('/', cInstance.index);
categoryRouter.post('/', cInstance.store);
categoryRouter.get('/:id', cInstance.show);
categoryRouter.put('/:id', cInstance.update);
categoryRouter.delete('/:id', cInstance.destroy);

export default categoryRouter;