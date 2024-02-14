import svgFileSrc from '@svg/**/*.svg';
import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';
import Stage from './stage';
import Layer from './layer';
import Logo from './logo';
import Intro from './intro';
import Navigation from './navigation';

class LayerManagement {
    constructor(ID, options) {
        this.stage = null;
        this.ID = ID;
        this.options = options;
        this.layers = options.map(obj => new Layer(obj, this.layerCallback.bind(this)));
        this.logo = new Logo(this.logoCallback.bind(this));
        this.intro = new Intro();
        this.navigation = new Navigation(this.navigationCallback.bind(this));
        this._activeted = false;
        this.adjust();

        // Bind event handlers in the constructor
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.layerCallback = this.layerCallback.bind(this);
        this.logoCallback = this.logoCallback.bind(this);
        this.navigationCallback = this.navigationCallback.bind(this);
        this.resizeStop = this.resizeStop.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
    }

    // Getter and setter can be simplified to a single line
    get activeted() { return this._activeted; }
    set activeted(b) { this._activeted = b; }

    // start scene
    starting() {
        this.intro.animate(true);
        this._activeted = true;
    }

    //
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
        const activeSvgFileSrc = svgFileSrc.sections[activeRel];

        this.navigation.focused(activeRel);

        helper.loadTexture(activeSvgFileSrc, (originalSize) => {
            if (!this.stage) {
                this.stage = new Stage(activeSectionOptions, originalSize, activeSvgFileSrc, (obj) => {
                    if (obj.type === EVENT_TYPES.ANIMATION_END) {
                        this.navigation.activeted = true;
                    }
                });
            } else {
                this.stage.updateProp(activeSectionOptions, originalSize, activeSvgFileSrc);
            }

            this.stage.init();

            setTimeout(() => {
                this.stage.startAnim();
                document.body.classList.add('ready');
            }, 111);
        });
    }

    async backToReturn() {
        if (this.stage) {
            this.stage.endAnim();
        }

        await helper.delay(1000);

        this.intro.animate(false);

        document.body.classList.remove('ready');
        document.querySelectorAll('.de-active, .is-active').forEach((element) => element.classList.remove('de-active', 'is-active'));
        
        await helper.delay(100);

        this.intro.animate(true);

        await helper.delay(2000);

        document.querySelector('main').removeAttribute('rel');
        this._activeted = true;
    }

    newStage(activeRel) {
        if (this.stage) {
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
        if (!this._activeted) {

            switch (obj.type) {
                case EVENT_TYPES.CLICK:
                    this.backToReturn();
                    break;
                default:
                    break;
            }
        }
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
        (this.stage && !this._activeted) && this.stage.adjust();
    }

    mouseMove(evt) {
        if (this._activeted) {
            const obj = { ...this.windowDimensions, ...helper.getMousePos(evt) };
            this.layers.forEach((layer) => layer.mouseMove(obj));
            this.logo.mouseMove(obj);
        }
    }
}

export default LayerManagement;