class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios");
    }

    if (this.isCodeRepeated(code)) {
      throw new Error("El código del producto ya está en uso");
    }

    const id = this.createUniqueId();
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    return product;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }

  isCodeRepeated(code) {
    return this.products.some((product) => product.code === code);
  }

  createUniqueId() {
    // npm install uuid
    const { v4: uuidv4 } = require('uuid');
    return uuidv4();
  }
}

const productManager = new ProductManager();
console.log("Productos iniciales:", productManager.getProducts());

const newProduct = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

try {
  console.log("Producto agregado:", productManager.addProduct(newProduct));
} catch (error) {
  console.log("Error al agregar producto:", error.message);
}

const productId = productManager.getProducts()[0]?.id;
try {
  console.log("Producto encontrado por ID:", productManager.getProductById(productId));
} catch (error) {
  console.log("Error al obtener producto por ID:", error.message);
}

try {
  console.log("Intento de obtener producto por ID inexistente");
  productManager.getProductById("id no existe");
} catch (error) {
  console.log("Error al obtener producto por ID inexistente:", error.message);
}