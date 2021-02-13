function initCarousel() {

  let carousel = document.querySelector('.carousel');
  let carouselInner =  document.querySelector('.carousel__inner');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  
  let slideWidth = carouselInner.offsetWidth;  
  let slideNumder = document.querySelectorAll('.carousel__slide').length - 1;  
  let position = 0;

  leftButton.style.display = 'none';

  carousel.onclick = function(event) {
    
    let target = event.target.closest('.carousel__arrow');
    
    position += (target.classList.contains('carousel__arrow_right')) ? 1 : -1;    
   
    carouselInner.style.transform = `translateX(-${position * slideWidth}px)`;

    rightButton.style.display = (position == slideNumder) ? 'none' : '';
    leftButton.style.display = (position == 0) ? 'none' : '';
  }
}
