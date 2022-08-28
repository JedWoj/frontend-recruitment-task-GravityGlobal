export default class Modal {
    constructor(name) {
        this.modal = document.querySelector([name]);
        this.btnModalHandler();
        this.getClickTarget();
    }

    modalVisibilityHandler() {
        this.modal.classList.toggle('modal__hidden');
    }

    btnModalHandler() {
        const btn = document.querySelector('.button--modal')
        btn.addEventListener('click', this.modalVisibilityHandler.bind(this))
    }

    getClickTarget() {
        this.modal.addEventListener('click', (e) => {
            this.handleClickTarget(e)
        })
    }

    handleClickTarget(e) {
       const {target} = e;
       (target.closest('.modal__exit-icon') || target.closest('.modal__wrapper') === null) ? this.modalVisibilityHandler() : null; 
    }
}
