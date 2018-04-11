import { Router } from 'express';

import {
  productCreate,
  productDeleteById,
  productLoadAll,
  productUpdateById,
} from './productControllers';

const router = Router();

router.get('/', productLoadAll);
router.post('/', productCreate);
router.patch('/:productId', productUpdateById);
router.delete('/:productId', productDeleteById);

export default router;
