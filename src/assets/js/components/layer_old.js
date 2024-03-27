import { gsap } from "gsap";
import * as helper from '@root/utils/helper';

import { EVENT_TYPES, ANIMATION } from '@root/enums';

class Layer {
    constructor({ key, button, layer }, callback) {
        this.isMobile = helper.mobile.detect();
        this.key = key;
        this.degree = button && helper.getDegree(this.isMobile ? button.degreeMobile : button.degree);
        this.distance = layer.distance;
        this.radius = layer.radius;
        this.speed = layer.speed;
        this.duration = layer.duration;

        //
        this.buttonPointerWidth = 14;

        // element
        this.buttonElement = document.querySelector(`button[rel="${key}"]`);
        this.layerElement = document.querySelector(`section[rel="${key}"]`);
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

    onClick(evt) {
        this.handleEvent({ type: EVENT_TYPES.CLICK, evt: evt });
    }

    addEventListeners() {
        this.layerElement.addEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        this.layerElement.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.layerElement.addEventListener('click', this.onClick.bind(this), false);
    }

    removeEventListeners() {

        this.layerElement.removeEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        this.layerElement.removeEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        this.layerElement.removeEventListener('click', this.onClick.bind(this), false);
    }

    initializePosition(animated = false) {
        const { x, y, maskSize, newCoorX, newCoorY, percent } = this.calculateCoordinates(window.innerWidth * .5, window.innerHeight * .5, window.innerWidth, window.innerHeight);
        const { px, py } = this.calculatePosition(window.innerWidth, window.innerHeight, newCoorX, newCoorY, percent);

        if (this.buttonElement?.style) {
            gsap.killTweensOf(this.buttonElement);

            if (animated) {
                gsap.to(this.buttonElement, {
                    x: px,
                    y: py,
                    duration: this.duration * .5,
                    ease: ANIMATION.EASE,
                });
            } else {
                gsap.set(this.buttonElement, {
                    x: px,
                    y: py
                });
            }

        }

        if (this.layerElement?.style) {
            gsap.killTweensOf(this.layerElement);

            if (animated) {
                gsap.to(this.layerElement, {
                    "--x": `${newCoorX}%`,
                    "--y": `${newCoorY}%`,
                    duration: this.duration * .5,
                    ease: ANIMATION.EASE,
                });
            } else {
                gsap.set(this.layerElement, {
                    "--x": `${newCoorX}%`,
                    "--y": `${newCoorY}%`
                });
            }

        }
    }

    calculateCoordinates(clientX, clientY, windowWidth, windowHeight) {
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        const maskSize = Math.abs((x - this.distance) * this.speed);
        const newCoorX = this.distance - (x - this.distance) * ANIMATION.SPEED_X;
        const newCoorY = this.distance - (y - this.distance) * ANIMATION.SPEED_Y;
        const width = (windowWidth / 100) * (this.radius + maskSize);
        const height = (windowHeight / 100) * (this.radius + maskSize);
        const percent = Math.sqrt(width * width + height * height) / Math.sqrt(2);

        return {
            x,
            y,
            maskSize,
            newCoorX,
            newCoorY,
            percent,
        };
    }

    calculatePosition(windowWidth, windowHeight, newCoorX, newCoorY, percent) {
        const px = (windowWidth / 100 * newCoorX) + percent * Math.cos(this.degree) - (this.buttonPointerWidth * 0.5);
        const py = (windowHeight / 100 * newCoorY) + percent * Math.sin(this.degree) - (this.buttonPointerWidth * 0.5);
        return { px, py };
    }

    animateButton(px, py) {
        
        this.buttonElement?.style && gsap.to(this.buttonElement, {
            x: px,
            y: py,
            duration: this.duration,
            ease: ANIMATION.EASE,
        });
    }

    animateLayer(newCoorX, newCoorY, maskSize) {
        
        this.layerElement?.style && gsap.to(this.layerElement, {
            "--x": `${newCoorX}%`,
            "--y": `${newCoorY}%`,
            duration: this.duration,
            ease: ANIMATION.EASE,
        });
    }

    mouseMove({ x: clientX, y: clientY, width: windowWidth, height: windowHeight }) {
        const { x, y, maskSize, newCoorX, newCoorY, percent } = this.calculateCoordinates(clientX, clientY, windowWidth, windowHeight);

        const { px, py } = this.calculatePosition(windowWidth, windowHeight, newCoorX, newCoorY, percent);

        this.animateButton(px, py);
        this.animateLayer(newCoorX, newCoorY, maskSize);
    }
}

export default Layer;