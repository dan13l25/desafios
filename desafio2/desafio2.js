import {promises as fs} from "fs"

class ProductManager {

    constructor() {
      this.path = "./productlist.txt";
      this.products = []
    }
    static id= 0
  
    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id += 1
    
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        };
        this.products.push(product)

        await fs.writeFile(this.path, JSON.stringify(this.products))

    }
}

const newProduct = new ProductManager()

newProduct.addProduct("Celular lg", "ultimo modelo a la venta", 50700 , "Img", 3)
newProduct.addProduct("Celular samsung", "modelo aantiguo pero funcional", 30700 , "Img2", 42)