import { gsap } from "gsap";
import * as helper from '@root/utils/helper';

class Layer {
    constructor({ key, button, layer }) {
        this.key = key;
        this.degree = helper.getDegree(button.degree);
        this.distance = layer.distance;
        this.radius = layer.radius;
        this.speed = layer.speed;

        //
        this.buttonPointerWidth = 14;
        
        // element
        this.buttonElement = document.querySelector(`button[rel="${key}"]`);
        this.layerElement = document.querySelector(`section[rel="${key}"]`);

        //
        this.initializePosition();
    }

    initializePosition() {
        const { x, y, maskSize, newCoorX, newCoorY, percent } = this.calculateCoordinates(window.innerWidth * .5, window.innerHeight * .5, window.innerWidth, window.innerHeight);
        const { px, py } = this.calculatePosition(window.innerWidth, window.innerHeight, newCoorX, newCoorY, percent);

        this.buttonElement?.style && gsap.set(this.buttonElement, {
                x: px,
                y: py,
            });

        this.layerElement?.style && gsap.set(this.layerElement, {
                "--x": `${newCoorX}%`,
                "--y": `${newCoorY}%`,
                "--maskSize": `${maskSize}%`,
            });
    }

    calculateCoordinates(clientX, clientY, windowWidth, windowHeight) {
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        const maskSize = Math.abs((x - this.distance) * this.speed);
        const newCoorX = this.distance - (x - this.distance) * 0.3;
        const newCoorY = this.distance - (y - this.distance) * 0.3;
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
                duration: 0.5,
                ease: "sine.out",
            });
    }

    animateLayer(newCoorX, newCoorY, maskSize) {
        this.layerElement?.style && gsap.to(this.layerElement, {
                "--x": `${newCoorX}%`,
                "--y": `${newCoorY}%`,
                "--maskSize": `${maskSize}%`,
                duration: 0.5,
                ease: "sine.out",
                //stagger: 0.05,
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