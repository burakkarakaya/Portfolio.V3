import { gsap } from "gsap";
import * as helper from '@root/utils/helper';

class HoverImg {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
        this.DOM.revealInner.style.overflow = 'hidden';
        this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

        this.initEvents();
    }

    initEvents() {
        this.positionElement = (ev) => {
            const mousePos = helper.getMousePos(ev);
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            };
            const spacing = 0;
            const clientRect = this.DOM.revealImg.getBoundingClientRect();
            this.DOM.reveal.style.top = `${(mousePos.y + spacing - docScrolls.top) - clientRect.height * .5}px`;
            this.DOM.reveal.style.left = `${(mousePos.x + spacing - docScrolls.left) - clientRect.width * .5}px`;
        };

        this.mouseenterFn = async (ev) => {
            this.positionElement(ev);
            await new Promise(resolve => requestAnimationFrame(resolve));
            this.showImage();
            
        };

        this.mousemoveFn = (ev) => requestAnimationFrame(() => {
            this.positionElement(ev);
        });

        this.mouseleaveFn = () => {
            this.hideImage();
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    showImage() {
        gsap.killTweensOf([this.DOM.revealInner, this.DOM.revealImg]);

        this.tl = gsap.timeline({
            onStart: () => {
                this.DOM.reveal.style.opacity = 1;
                gsap.set(this.DOM.el, { zIndex: 1000 });
            }
        })
            .add('begin')
            .to(this.DOM.revealInner, {
                duration: 0.2,
                ease: 'sine.out',
                startAt: { x: '-100%' },
                x: '0%'
            }, 'begin')
            .to(this.DOM.revealImg, {
                duration: 0.2,
                ease: 'sine.out',
                startAt: { x: '100%' },
                x: '0%'
            }, 'begin');
    }

    hideImage() {
        gsap.killTweensOf([this.DOM.revealInner, this.DOM.revealImg]);

        this.tl = gsap.timeline({
            onStart: () => {
                gsap.set(this.DOM.el, { zIndex: 999 });
            },
            onComplete: () => {
                gsap.set(this.DOM.el, { zIndex: '' });
                gsap.set(this.DOM.reveal, { opacity: 0 });
            }
        })
            .add('begin')
            .to(this.DOM.revealInner, {
                duration: 0.2,
                ease: 'sine.out',
                x: '100%'
            }, 'begin')
            .to(this.DOM.revealImg, {
                duration: 0.2,
                ease: 'sine.out',
                x: '-100%'
            }, 'begin');
    }

}

export default HoverImg;