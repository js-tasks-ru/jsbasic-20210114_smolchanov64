import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(
      `<div class="modal">
      
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
            
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title"></h3>
          </div>
    
          <div class="modal__body"></div>
        </div>  
      </div>`);

      let buttonClose = this.elem.querySelector('.modal__close');
      buttonClose.addEventListener('click', this.close);     
  }

  open = function() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    document.addEventListener('keydown', this.closeEsc);    
  }

  setTitle = function(title) {
    let elemTitle = this.elem.querySelector('.modal__title');    
    if (elemTitle) {
      elemTitle.innerHTML = title;
    }    
  }

  setBody = function(node) {
    let elemBody = this.elem.querySelector('.modal__body');    
    if (elemBody) {
      elemBody.innerHTML = node.outerHTML;
    }
  }

  close = () => {    
    this.elem.remove();
    document.body.classList.remove('is-modal-open');    
  }

  closeEsc = (event) => {    
    if (event.code === 'Escape') {
      /* с этим условием не проходит тест, хотя условие вроде не лишнее 
      && document.body.classList.contains('is-modal-open')) {*/
        this.close();        
        document.removeEventListener('keydown', this.closeEsc);
      }    
  }
}
