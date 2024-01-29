class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("campo obligatorio");
        return;
      }
  
      if (this.isCodeRepeated(code)) {
        console.log("El código del producto ya está en uso");
        return;
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
        console.log("Producto no encontrado");
        return;
      }
  
      return product;
    }
  
    isCodeRepeated(code) {
      return this.products.some((product) => product.code === code);
    }
  
    createUniqueId() {
      return "_" + Math.random().toString(36).substr(2, 9);
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
  console.log("Producto agregado:", productManager.addProduct(newProduct));
  
  const productId = productManager.getProducts()[0].id;
  console.log("Producto encontrado por ID:", productManager.getProductById(productId));
  
  try {
    productManager.getProductById("id no existe");
  } catch (error) {
    console.log("Error al obtener producto por ID:");
  }