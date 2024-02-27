import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

class Navigation {
    constructor(callback) {

        this.element = document.querySelector(`.navigation`);

        this.cls = {
            selected: 'selected'
        };
        this._activeted = true;
        this.timeout = 10;

        this.addEventListeners();

        //
        this.callback = callback;
    }

    get activeted() {
        return this._activeted;
    }

    set activeted(b) {
        this._activeted = b;
    }

    handleEvent({ type, evt }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type, evt });
        }
    }

    onClick(evt){
        if (this._activeted){
            this._activeted = false;
            this.handleEvent({ type: EVENT_TYPES.CLICK, evt: evt });
            setTimeout(() => {
                this._activeted = true;
            }, this.timeout);
        }
    }

    focused(rel){
        this.element.querySelectorAll(`a`).forEach((element) => element.classList.remove(this.cls.selected));
        this.element.querySelector(`a[rel="${rel}"]`).classList.add(this.cls.selected);
    }

    addEventListeners() {
        this.element.querySelectorAll(`a`).forEach((element)=>element.addEventListener('click', this.onClick.bind(this), false));
    }

    removeEventListeners() {
        this.element.querySelectorAll(`a`).forEach((element)=>element.removeEventListener('click', this.onClick.bind(this), false));
    }
}

export default Navigation;