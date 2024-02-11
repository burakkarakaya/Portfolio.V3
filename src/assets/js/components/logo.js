import { gsap } from "gsap";
import * as helper from '@root/utils/helper';

import { EVENT_TYPES } from '@root/enums';

class Logo {
    constructor(callback) {

        this.distance = 50;

        // element
        this.logoElement = document.querySelector(`.logo`);
        this.addEventListeners();

        //
        this.initializePosition();

        //
        this.callback = callback;
    }

    handleEvent({ type, evt }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type, evt });
        }
    }

    onMouseEnter(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_ENTER, evt: evt });
    }

    onMouseLeave(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_LEAVE, evt: evt });
    }

    onClick(evt){
        this.handleEvent({ type: EVENT_TYPES.CLICK, evt: evt });
    }

    addEventListeners() {
        this.logoElement.addEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        this.logoElement.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.logoElement.addEventListener('click', this.onClick.bind(this), false);
    }

    removeEventListeners() {

        this.logoElement.removeEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        this.logoElement.removeEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.logoElement.removeEventListener('click', this.onClick.bind(this), false);
    }

    initializePosition() {
        const { x, y, maskSize, newCoorX, newCoorY, percent } = this.calculateCoordinates(window.innerWidth * .5, window.innerHeight * .5, window.innerWidth, window.innerHeight);

        this.logoElement?.style && gsap.set(this.logoElement, {
            "--x": `${newCoorX}%`,
            "--y": `${newCoorY}%`
        });
    }

    calculateCoordinates(clientX, clientY, windowWidth, windowHeight) {
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        const newCoorX = this.distance - (x - this.distance) * 0.3;
        const newCoorY = this.distance - (y - this.distance) * 0.3;

        return {
            x,
            y,
            newCoorX,
            newCoorY
        };
    }

    animateLogo(newCoorX, newCoorY) {

        this.logoElement?.style && gsap.set(this.logoElement, {
            "--x": `${newCoorX}%`,
            "--y": `${newCoorY}%`,
            "duration": 1,
            "ease": "sine.out"
        });
    }

    mouseMove({ x: clientX, y: clientY, width: windowWidth, height: windowHeight }) {
        const { newCoorX, newCoorY } = this.calculateCoordinates(clientX, clientY, windowWidth, windowHeight);

        this.animateLogo(newCoorX, newCoorY);
    }
}

export default Logo;