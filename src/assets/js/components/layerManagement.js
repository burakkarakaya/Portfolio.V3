import svgFileSrc from '@svg/**/*.svg';

import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

import Stage from './stage';
import Layer from './layer';
import Logo from './logo';

class LayerManagement {
    constructor(ID, options) {
        this.ID = ID;
        this.options = options;
        this.layers = options.map(obj => new Layer(obj, this.layerCallback.bind(this)));
        this.logo = new Logo(this.logoCallback.bind(this));
        this._activeted = false;
        this.adjust();

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    get activeted() {
        return this._activeted;
    }

    set activeted(b) {
        this._activeted = b;
    }

    handleMouseEnter(evt) {
        if (this._activeted) {
            const target = evt.currentTarget;
            this.ID.setAttribute('rel', target.getAttribute('rel') || '');
        }
    }

    handleMouseLeave() {
        if (this._activeted) {
            this.ID.removeAttribute('rel');
        }
    }

    handleClick(evt) {
        if (this._activeted) {
            const target = evt.currentTarget;
            const sib = helper.getSiblings(target);

            sib.forEach((element) => element.classList.add('de-active'));

            target.classList.add('is-active');
            this._activeted = false;

            const activeRel = target.getAttribute('rel') || '';
            const activeSectionOptions = this.options.find(x => x.key === activeRel);
            const activeSvgFileSrc = svgFileSrc[`sections`][`${activeRel}`];

            helper.loadTexture(activeSvgFileSrc, (originalSize) => {
                const stage = new Stage(activeSectionOptions, originalSize, activeSvgFileSrc);
                stage.init();

                setTimeout(() => {
                    document.body.classList.add(`ready`);
                    stage.startAnim();
                }, 500);
            });
        }
    }

    layerCallback(obj) {

        if (this._activeted) {
            const evt = obj.evt;

            switch (obj.type) {
                case EVENT_TYPES.MOUSE_ENTER:
                    this.handleMouseEnter(evt);
                    break;
                case EVENT_TYPES.MOUSE_LEAVE:
                    this.handleMouseLeave();
                    break;
                case EVENT_TYPES.CLICK:
                    this.handleClick(evt);
                    break;
                default:
                    break;
            }
        }
    }

    logoCallback(obj) {
        // nothing
    }

    adjust() {

        this.windowDimensions = helper.getWindowSize();

        this.layers.forEach((layer) => layer.initializePosition());
    }

    mouseMove(evt) {
        if (this._activeted) {
            const obj = Object.assign({}, this.windowDimensions, helper.getMousePos(evt));
            this.layers.forEach((layer) => layer.mouseMove(obj));
            this.logo.mouseMove(obj);
        }
    }
}

export default LayerManagement;