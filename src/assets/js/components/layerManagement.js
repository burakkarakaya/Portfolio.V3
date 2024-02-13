import svgFileSrc from '@svg/**/*.svg';

import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

import Stage from './stage';
import Layer from './layer';
import Logo from './logo';
import Navigation from './navigation';

class LayerManagement {
    constructor(ID, options) {
        this.stage = null;
        this.ID = ID;
        this.options = options;
        this.layers = options.map(obj => new Layer(obj, this.layerCallback.bind(this)));
        this.logo = new Logo(this.logoCallback.bind(this));
        this.navigation = new Navigation(this.navigationCallback.bind(this));
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
            this.ID.setAttribute('rel', target.getAttribute('rel') || '');

            this._activeted = false;

            this.loadStage(target.getAttribute('rel') || '');
        }
    }

    loadStage(activeRel) {

        const activeSectionOptions = this.options.find(x => x.key === activeRel);
        const activeSvgFileSrc = svgFileSrc[`sections`][`${activeRel}`];

        this.navigation.focused(activeRel);

        helper.loadTexture(activeSvgFileSrc, (originalSize) => {

            if (this.stage == null) {
                this.stage = new Stage(activeSectionOptions, originalSize, activeSvgFileSrc, (obj) => {

                    switch (obj.type) {
                        case EVENT_TYPES.ANIMATION_END:
                            this.navigation.activeted = true;
                            break;
                    
                        default:
                            break;
                    }
                });
            } else {
                this.stage.updateProp(activeSectionOptions, originalSize, activeSvgFileSrc);
            }

            this.stage.init();

            setTimeout(() => {
                this.stage.startAnim();
                document.body.classList.add(`ready`);
            }, 111);
        });
    }

    newStage(activeRel) {
        if (this.stage != null) {
            this.stage.endAnim();
        }

        setTimeout(() => {

            const target = document.querySelector(`section[rel="${activeRel}"]`);
            const sib = helper.getSiblings(target);

            sib.forEach((element) => {
                element.classList.add('de-active');
                element.classList.remove('is-active');
            });

            target.classList.remove('de-active');
            target.classList.add('is-active');

            this.ID.setAttribute('rel', target.getAttribute('rel') || '');

            this.loadStage(activeRel);

        }, 1000);
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

    navigationCallback(obj) {
        if (!this._activeted) {
            const evt = obj.evt;

            switch (obj.type) {
                case EVENT_TYPES.CLICK:

                    const target = evt.currentTarget;

                    this.newStage(target.getAttribute('rel') || '');

                    break;
                default:
                    break;
            }
        }
    }

    adjust() {
        this.windowDimensions = helper.getWindowSize();

        this.layers.forEach((layer) => layer.initializePosition());

        this.logo.initializePosition();
    }

    resizeStop() {
        this.stage && this.stage.adjust();
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