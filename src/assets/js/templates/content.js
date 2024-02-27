import { gsap } from "gsap";
import icons from '@assets/icons.svg';
import { CONTENT_TYPE } from '@root/enums';

class Content {
    constructor() {
        this.element = document.querySelector('.contents');
    }

    generateAwards({ awards }) {

        return awards && awards.map(({ ico })=>`<svg class="icon-burger fs-20">
                        <use xlink:href="${icons}#${ico}"></use>
                    </svg></a>`).join('');
    }
    
    endAnim(){

        const animated = Array.from(this.element.querySelectorAll('.animated'));

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

    startAnim(){

        const animated = Array.from(this.element.querySelectorAll('.animated'));

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
            onComplete: (index) => {}
        });
    }

    async generate(content) {
        const { type, data } = content;

        switch (type) {
            case CONTENT_TYPE.text:
                this.element && (this.element.innerHTML = data);
                break;

            case CONTENT_TYPE.list:
                const list = data.map((obj) => `
                    <li class="animated">
                        <span class="name">
                            <a title="${obj.name}" target="_blank" href="${obj.link}">
                                <span>${obj.name}</span>
                            </a>
                            ${this.generateAwards(obj)}
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
    }

    reset() {
        this.element && (this.element.innerHTML = '');
    }
}

export default Content;