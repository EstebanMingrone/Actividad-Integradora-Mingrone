import { productModel } from "../models/productModel.js";

class productDB{

    async getAllProducts(){
        try{
            const products = await productModel.find();
            return products;
        }catch (error){
            console.error(error.message);
            return [];
        }
    }

    async createProduct(product){
        const {title, description, code, price, stock, category, thumbnails} = product;

        if (!title || !description || !code || !price || !stock || !category){
            return "Error al crear el Producto"
        }

        const newProduct = {
            title,
            description, 
            code, 
            price, 
            status: true, 
            stock, 
            category, 
            thumbnails: thumbnails ?? []
        }

        try {
            const result = await productModel.create(newProduct)          
            return 'Producto creado correctamente'
        } catch (error) {
            console.error(error.message)
            return 'Error al crear el Producto'
        }

    }
}

export { productDB };