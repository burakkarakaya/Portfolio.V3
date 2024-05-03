import { gsap } from "gsap";

import * as helper from '@root/utils/helper';

import icons from '@assets/icons.svg';

import { CONTENT_TYPE } from '@root/enums';

import HoverImg from '@root/components/hoverImg';

import WordAnimate from '@root/components/wordAnimator';

class Content {
    constructor() {
        this.element = document.querySelector('.contents');
        this.docBody = document.body;
        this.cls = {
            backToHomeAnimate: 'back-to-home-animate'
        };
    }

    generateAwards({ awards }) {

        return awards && awards.map(({ ico })=>`<svg class="icon ${ico}">
                        <use xlink:href="${icons}#${ico}"></use>
                    </svg></a>`).join('');
    }
    
    endAnim(){

        const animated = Array.from(this.element.querySelectorAll('.animated'));

        if (animated.length > 0){
            
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.3,
                    ease: 'power2.out',
                }
            });
    
            tl.to(animated, {
                opacity: 0,
                y: 20,
                rotateX: -90,
                transformOrigin: '50% 50% -50',
                stagger: 0.05,
                onComplete: (index) => {}
            });

        }
    }

    startAnim(){

        const _self = this;

        const animated = Array.from(this.element.querySelectorAll('.animated'));

        if (animated.length > 0){

            const tl = gsap.timeline({
                defaults: {
                    duration: 0.3,
                    ease: 'power2.out',
                }
            });
    
            tl.from(animated, {
                opacity: 0,
                y: 20,
                rotateX: -90,
                transformOrigin: '50% 50% -50',
                stagger: 0.05,
                onComplete: (index) => {
                    if (!helper.hasClass({ element: _self.docBody, value: _self.cls.backToHomeAnimate })) {
                        animated.forEach((element)=>element.removeAttribute('style'));
                    }
                }
            });

        }
    }

    initPlugins(){
        const imgHover = this.element.querySelectorAll('[data-img]');
        imgHover.length > 0 && imgHover.forEach(element => new HoverImg(element));

        const words = this.element.querySelectorAll('.word');
        if (window.wordAnimation){
            clearInterval(window.wordAnimation)
        }
        if (words.length > 0){
            new WordAnimate(words);
        } 
    }

    async generate(content) {
        const { type, data } = content;

        switch (type) {
            case CONTENT_TYPE.text:
                this.element && (this.element.innerHTML = data);
                break;

            case CONTENT_TYPE.list:
                const list = data.map((obj) => `
                    <li data-img="${obj.media.join()}" class="animated">
                        <span class="name">
                            <a title="${obj.name}" target="_blank" href="${obj.link}">
                                <span title="${obj.name}">${obj.name}</span>
                            </a>
                            <span class="awards d-flex">${this.generateAwards(obj)}</span>
                        </span>
                        <span class="technologies">${obj.technologies.join(',')}</span>
                        <span class="type">${obj.type}</span>
                        <span class="agency">${obj.agency}</span>
                    </li>`).join('');

                const title = `<li class="title animated">
                    <span class="name">name</span>
                    <span class="technologies">technologies</span>
                    <span class="type">type</span>
                    <span class="agency">agency</span>
                </li>`;

                const htm = `<ul class="list">${title}${list}</ul>`;

                this.element && (this.element.innerHTML = htm);

                break;

            default:
                break;
        }

        await new Promise(resolve => requestAnimationFrame(resolve));

        this.startAnim();
        this.initPlugins();
    }

    reset() {
        this.element && (this.element.innerHTML = '');
    }
}

export default Content;