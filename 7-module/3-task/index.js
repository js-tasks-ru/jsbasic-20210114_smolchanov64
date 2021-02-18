import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = createElement(
      `<div class="slider">        
        <div class="slider__thumb">
          <span class="slider__value">${value}</span>
        </div>       
        <div class="slider__progress"></div>
      </div>`);

    this.value = value;
    this.steps = steps - 1;

    let sliderSteps = createElement(`<div class="slider__steps"></div>`);

    for (let i=0; i<steps; i++) {
      let span = createElement(`<span id="span${i}"></span>`);
      if (i == value) {
        span.classList.add('slider__step-active');
        this.activeSpan = span;
      }
      sliderSteps.append(span);
    }

    this.elem.append(sliderSteps);

    this.thumb = this.elem.querySelector('.slider__thumb');
    this.progress = this.elem.querySelector('.slider__progress');
    this.thumb.style.left = `0%`;
    this.progress.style.width = `0%`;

    this.elem.addEventListener('click', this.onClick);
  }

  onClick = (event) => {
    let sliderData = this.elem.getBoundingClientRect();
    this.value = Math.round(
      (event.clientX - sliderData.left)/(sliderData.width/this.steps));
    
    let sliderValue = this.elem.querySelector('.slider__value');
    sliderValue.textContent = this.value;

    let activeSpan = document.getElementById(`span${this.value}`);
    activeSpan.classList.add('slider__step-active');
    this.activeSpan.classList.remove('slider__step-active');
    this.activeSpan = activeSpan;   

    let leftPercents = Math.round(100*this.value/this.steps);
    this.thumb.style.left = `${leftPercents}%`;
    this.progress.style.width = `${leftPercents}%`;

    let customEvent = new CustomEvent("slider-change", 
      { detail: this.value, bubbles: true });
    this.elem.dispatchEvent(customEvent);
  }
}