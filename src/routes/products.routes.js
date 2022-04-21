import { Router } from "express";
const router =Router()
import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getproducts)

router.get('/:productId', productsCtrl.getproductById)

router.put('/:productId', productsCtrl.updateProductById)

router.delete('/:productId', productsCtrl.deleleProductById)

export default router;