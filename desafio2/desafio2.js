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

    readProducts = async () => {
        try {
            let dataProduct = await fs.readFile(this.path, 'utf-8');
            return JSON.parse("Contgenido del archivo", dataProduct);
        } catch (error) {
            console.error("Error al leer o parsear el archivo:", error.message);
            return [];
        }
    }

    getProduct = async () =>{
        let reply = await this.readProducts()
        return await console.log(reply)
    }

    getProductById = async (id) => {
        let getId = await this.readProducts();
        let filter = getId.find(product => product.id === id);
        console.log(filter);
    }
    
    deleteproductById = async (id) => {
        let erase = await this.readProducts();
        let productFiltered = erase.filter(products => products.id != id);
        await fs.writeFile(this.path, JSON.stringify(productFiltered));
        console.log("producto eliminado");
    }

    updateProduct = async ({ id, ...newProductData }) => {
    await this.deleteproductById(id); 
    let oldProducts = await this.readProducts();
    let modifyProduct = [{ ...newProductData, id }, ...oldProducts];
    await fs.writeFile(this.path, JSON.stringify(modifyProduct));
}
}

const newProduct = new ProductManager()

newProduct.addProduct("Celular lg", "ultimo modelo a la venta", 50700 , "Img", 3)
newProduct.addProduct("Celular samsung", "modelo aantiguo pero funcional", 30700 , "Img2", 42)



newProduct.getProductById(1)