import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;    
    this.filters = {};

    this.render();   
  }

  render() {
    
    if (!this.elem) {
      this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">        
        </div>
      </div>
      `);
    }

    let gridInner = this.elem.querySelector('.products-grid__inner');
    gridInner.innerHTML = '';
    
    for (let product of this.products) {
      if (this.isValidProduct(product)) {
        let productCardElem = new ProductCard(product);
        gridInner.append(productCardElem.elem);
      }      
    }
  }

  isValidProduct(product) {
    if (this.filters.noNuts && product.nuts) {      
      return false;
    }
    if (this.filters.vegeterianOnly && !product.vegeterian) {      
      return false;
    }
    if (this.filters.maxSpiciness 
      && (!isFinite(product.spiciness) || product.spiciness > this.filters.maxSpiciness)) {      
        return false;
    }
    if (this.filters.category && (product.category !== this.filters.category)) {      
      return false;
    }

    return true;
  }

  updateFilter(filters) {
    for (let key in filters) {      
      this.filters[key] = filters[key];
    }

    this.render();
    
  }
}
