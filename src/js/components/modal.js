import { COUNT,CLEAR,GET, SET } from "../utils/helpers";

export default class Modal {
    constructor(name) {
        this.count = 0;
        this.counter = document.querySelector('.modal__clicked-info');
        this.resetBtn = document.querySelector('.button--reset');
        this.modal = document.querySelector([name]);
        this.btnModalHandler();
        this.getClickTarget();
        this.resetBtnHandler();
        this.handleLocalStorage();
    }

    modalVisibilityHandler() {
        this.modal.classList.toggle('modal__hidden');
    }

    btnModalHandler() {
        const btn = document.querySelector('.button--modal')
        btn.addEventListener('click',() => {
            this.modalVisibilityHandler();
            this.incrementCounter();
        })
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

    incrementCounter() {
        this.count++;
        this.useStorage(SET);
        this.counter.textContent = `${this.count} times`;
        this.count > 5 ? this.resetBtn.classList.remove('button__hidden') : this.resetBtn.classList.add('button__hidden');
    }

    resetBtnHandler() {
        this.resetBtn.addEventListener('click', () => {
            this.count = 0;
            this.modalVisibilityHandler();
        })
    }

    handleLocalStorage() {
       localStorage.getItem(COUNT) === null ? this.useStorage(SET) : this.useStorage(GET);
    }

    useStorage(action) {
        switch (action) {
            case GET :
                const storage = JSON.parse(localStorage.getItem(COUNT));
                this.count = storage;
                break;
            case CLEAR :
                this.count = 0;
                storage = localStorage.setItem(COUNT, JSON.stringify(this.count));
                break;
            case SET : 
                localStorage.setItem(COUNT, JSON.stringify(this.count));
                break;
        }
    }
}
