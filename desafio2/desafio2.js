import {promises as fs} from "fs"

class ProductManager {

    constructor() {
      this.path = "./productlist.txt";
    }
    static id= 0
  
    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id + 1
    
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        };

        await fs.writeFile(this.path, JSON.stringify(product))

    }
}

const products = new ProductManager()