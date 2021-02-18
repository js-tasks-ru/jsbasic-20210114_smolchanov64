import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = createElement('<div class="ribbon"></div>');

    this.leftButton = createElement(
      `<button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`);

    this.rightButton = createElement(
      `<button class="ribbon__arrow ribbon__arrow_right  ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`);

    this.inner = createElement('<nav class="ribbon__inner"></nav>');

    for (let category of categories) {
      let categoryRef = createElement(
        `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`);
      if (!category.id) {
        categoryRef.classList.add('ribbon__item_active');
        this.activeItem = categoryRef;
      }
      this.inner.append(categoryRef);
    }

    this.elem.append(this.leftButton);
    this.elem.append(this.inner);
    this.elem.append(this.rightButton);

    this.elem.addEventListener('click', this.onClick);
    this.inner.addEventListener('scroll', this.onScrollInner);
  }

  onClick = (event) => {
    
    let button = event.target.closest('.ribbon__arrow');
    if (button) {
      if (button.classList.contains('ribbon__arrow_right')) {
        this.inner.scrollBy(350,0);
      } else {
        this.inner.scrollBy(-350,0);
      }
      return;
    }

    let categoryRef = event.target.closest('.ribbon__item');
    if (categoryRef) {

      event.preventDefault();
      
      this.activeItem.classList.remove('ribbon__item_active');
      categoryRef.classList.add('ribbon__item_active');
      this.activeItem = categoryRef;
      
      let customEvent = new CustomEvent("ribbon-select", 
        { detail: categoryRef.dataset.id, bubbles: true });
      this.elem.dispatchEvent(customEvent);

      return;
    }
  }

  onScrollInner = () => {
    
    if (this.inner.scrollLeft) {
      this.leftButton.classList.add('ribbon__arrow_visible');
    } else {
      this.leftButton.classList.remove('ribbon__arrow_visible');
    }

    let scrollRight = this.inner.scrollWidth - this.inner.scrollLeft - this.inner.clientWidth;    
    if (scrollRight >= 1) {
      this.rightButton.classList.add('ribbon__arrow_visible');
    } else {
      this.rightButton.classList.remove('ribbon__arrow_visible');
    }    
  }
}