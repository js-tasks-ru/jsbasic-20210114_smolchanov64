export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;    
  }

  addProduct(product) {    
    let productItem = this.cartItems.find(item => item.product.id === product.id);    
    if (productItem) {
      ++productItem.count;      
    } else {
      productItem = {product: product, count: 1};
      this.cartItems.push(productItem);
    }
    this.onProductUpdate(productItem);    
  }

  updateProductCount(productId, amount) {
    let itemIndex = this.cartItems.findIndex(item => item.product.id === productId);    
    if (itemIndex >= 0) {
      this.cartItems[itemIndex].count += amount;
      this.onProductUpdate(this.cartItems[itemIndex]);
      if (this.cartItems[itemIndex].count <= 0) {
        this.cartItems.splice(itemIndex, 1);
      }
    }    
  }

  isEmpty() {
    return !this.cartItems.length;
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.count * item.product.price, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

