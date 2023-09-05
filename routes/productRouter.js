import { Router } from "express";
import { productFSManager } from "../services/productFSManager.js";
import { productDB } from "../services/productDB.js";
import { uploader } from "../utils/multer.js";

const router = Router();
//const productManager = new productFSManager('Products.json')
const ProductService = new productDB();

router.get('/', async (req,res)=>{
    const products = await ProductService.getAllProducts()
    res.send(products)
})

router.post('/', uploader.array('thumbnails', 3), async (req, res)=>{
    if (!req.file){
        req.body.thumbnails = [];
        req.files.forEach((file)=>{
            req.body.thumbnails.push(file.filename);
        })
    }

    const result = await ProductService.createProduct(req.body);
    
    res.send({
        message: result
    })
})

export default router;
