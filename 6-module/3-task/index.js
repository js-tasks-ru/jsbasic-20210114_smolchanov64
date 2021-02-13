import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    let html = `
    <div class="carousel">    
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    </div>`;

    this.elem = createElement(html);

    this.inner = createElement(`<div class="carousel__inner"></div>`);

    for (let slide of slides) {
      this.inner.append(createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`));
    }
    this.elem.append(this.inner);
    this.elem.addEventListener('click', this.onClick);

    this.rightButton = this.elem.querySelector('.carousel__arrow_right');
    this.leftButton = this.elem.querySelector('.carousel__arrow_left');
    this.leftButton.style.display = 'none';
    
    this.position = 0;
  }

  onClick = () => {
    let button = event.target.closest('.carousel__button');
    if (button) {
      let slide = button.closest('.carousel__slide');      
      let customEvent = new CustomEvent("product-add", 
        { detail: slide.dataset.id, bubbles: true });
      this.elem.dispatchEvent(customEvent);
      return;
    }

    button = event.target.closest('.carousel__arrow');
    if (button) {

      let slideWidth = this.inner.offsetWidth;  
      
      if (button.classList.contains('carousel__arrow_right')) {
        this.position++;
      } else {
        this.position--;
      }

      this.inner.style.transform = `translateX(-${this.position * slideWidth}px)`;
      this.rightButton.style.display = (this.position == (this.slides.length - 1)) ? 'none' : '';
      this.leftButton.style.display = (this.position == 0) ? 'none' : '';
      return;
    }
  }
}
