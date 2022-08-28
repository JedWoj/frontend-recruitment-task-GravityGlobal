import { COUNT,CLEAR,GET,SET } from "../utils/helpers";

export default class Modal {
    constructor(modalName, btnModalName, btnResetName) {
        this.count = 0;
        this.modal = document.querySelector(`.${[modalName]}`);
        this.counter = document.querySelector(`.${[modalName]}__count`);
        this.resetBtn = document.querySelector(`.${[btnResetName]}`);
        this.mountingComponent(btnModalName);
    }

    mountingComponent(btnModalName) {
        this.btnModalHandler(btnModalName);
        this.handleLocalStorage();
        this.getClickTarget();
        this.resetBtnHandler();
    }

    modalVisibilityHandler() {
        this.modal.classList.toggle(`modal__hidden`);
    }

    btnModalHandler(btnModalName) {
        const btn = document.querySelector(`.${[btnModalName]}`);
        btn.addEventListener('click',() => {
            this.modalVisibilityHandler();
            this.incrementCounter();
        })
    }

    getClickTarget() {
        this.modal.addEventListener('click', (e) => {
            this.handleClickTarget(e);
        })
    }

    handleClickTarget(e) {
       const {target} = e;
        if (target.closest('.modal__exit-icon') || !target.closest('.modal__wrapper')) {
            this.modalVisibilityHandler();
        } 
    }

    incrementCounter() {
        this.count++;
        this.useStorage(SET);
        this.counter.textContent = `${this.count} times`;
        this.count > 5 ? this.resetBtn.classList.remove('button__hidden') : this.resetBtn.classList.add('button__hidden');
    }

    resetBtnHandler() {
        this.resetBtn.addEventListener('click', this.resetCounter.bind(this));
    }

    resetCounter() {
        this.useStorage(CLEAR);
        this.modalVisibilityHandler();
    }

    handleLocalStorage() {
       localStorage.getItem(COUNT) === null ? this.useStorage(SET) : this.useStorage(GET);
    }

    useStorage(action) {
        switch (action) {
            case GET :
                const getStorage = JSON.parse(localStorage.getItem(COUNT));
                this.count = getStorage;
                break;
            case CLEAR :
                this.count = 0;
                localStorage.setItem(COUNT, JSON.stringify(this.count));
                break;
            case SET : 
                localStorage.setItem(COUNT, JSON.stringify(this.count));
                break;
        }
    }
}
