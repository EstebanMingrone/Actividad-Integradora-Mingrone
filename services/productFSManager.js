import fs from 'fs'

class productFSManager{
    constructor(file){
        this.file = file;
    }

    getAllProducts(){
        try{
            const products = fs.readFileSync(this.file,'utf-8');
            return JSON.parse(products);
        }catch (error){
            console.error(error.message);
            return [];
        }
    }

    createProduct(product){
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

        const products = this.getAllProducts();
        products.push(newProduct);

        try {
            fs.writeFileSync(this.file, JSON.stringify(products, null, '\t'))
            return 'Producto creado correctamente'
        } catch (error) {
            console.error(error.message)
            return 'Error al crear el Producto'
        }

    }
}

export { productFSManager };