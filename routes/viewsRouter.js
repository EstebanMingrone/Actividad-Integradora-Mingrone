import { Router } from "express";
import { productFSManager } from "../services/productFSManager.js";

const router = Router();
const productManager = new productFSManager('Products.json')

router.get('/', (req,res)=>{
    res.render(
        'index',
        {
            title: 'FruitLand',
            style: 'index.css',
            products: JSON.stringify(productManager.getAllProducts(), null, "\t")
        }
    )
})

export default router;