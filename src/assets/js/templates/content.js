import { gsap } from "gsap";
import { CONTENT_TYPE } from '@root/enums';

class Content {
    constructor() {
        this.element = document.querySelector('.contents');
    }

    generateAwards({ awards }) {
        return '';
    }

    async animateListItems(items) {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: 'power2.out',
            }
        });

        tl.from(items, {
            opacity: 0,
            y: 20,
            rotateX: -90, // Initial rotation on the X-axis
            transformOrigin: '50% 50% -50', // Adjust perspective value
            stagger: 0.05,
            onComplete: (index) => {
                // Additional actions after each item animation
                // You can access the index of the completed item using the 'index' parameter
            }
        });

        return tl;
    }

    async generate(content) {
        const { type, data } = content;

        switch (type) {
            case CONTENT_TYPE.list:
                const list = data.map((obj) => `
                    <li>
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

                const title = `<li class="title">
                    <span class="name">name</span>
                    <span class="technologies">technologies</span>
                    <span class="type">type</span>
                    <span class="agency">agency</span>
                </li>`;

                const htm = `<ul class="list">${title}${list}</ul>`;

                this.element && (this.element.innerHTML = htm);

                // Wait for the DOM to be updated before triggering the animation
                await new Promise(resolve => requestAnimationFrame(resolve));

                // Get all list items for animation
                const itemsToAnimate = Array.from(this.element.querySelectorAll('.list li'));

                // Animate list items
                await this.animateListItems(itemsToAnimate);

                break;

            default:
                break;
        }
    }

    reset() {
        this.element && (this.element.innerHTML = '');
    }
}

export default Content;