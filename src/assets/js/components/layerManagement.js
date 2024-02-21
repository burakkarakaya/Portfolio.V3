import svgFileSrc from '@svg/**/*.svg';
import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';
import Stage from './stage';
import Layer from './layer';
import Logo from './logo';
import Intro from './intro';
import Navigation from './navigation';
import Content from '@root/templates/content';

class LayerManagement {
    constructor(ID, options) {
        this.stage = null;
        this.ID = ID;
        this.options = options;
        this.layers = options.map(obj => new Layer(obj, this.layerCallback.bind(this)));
        this.logo = new Logo(this.logoCallback.bind(this));
        this.intro = new Intro();
        this.navigation = new Navigation(this.navigationCallback.bind(this));
        this.content = new Content();
        this._activeted = false;
        this.adjust();

        //
        this.docBody = document.body;
        this.cls = {
            deActive: 'de-active',
            isActive: 'is-active',
            ready: 'ready',
            backToHomeAnimate: 'back-to-home-animate'
        };

        // Bind event handlers in the constructor
        this.handleLayerMouseEnter = this.handleLayerMouseEnter.bind(this);
        this.handleLayerMouseLeave = this.handleLayerMouseLeave.bind(this);
        this.handleLayerClick = this.handleLayerClick.bind(this);
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
    handleLayerMouseEnter(evt) {
        if (this._activeted) {
            const target = evt.currentTarget;
            this.ID.setAttribute('rel', target.getAttribute('rel') || '');
        }
    }

    handleLayerMouseLeave() {
        if (this._activeted) {
            this.ID.removeAttribute('rel');
        }
    }

    handleLayerClick(evt) {
        if (this._activeted) {
            const target = evt.currentTarget;
            const sib = helper.getSiblings(target);

            sib.forEach((element) => element.classList.add(this.cls.deActive));
            target.classList.add(this.cls.isActive);
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
                this.stage.reset();
            }

            this.stage.init();

            setTimeout(() => {
                this.stage.startAnim();
                activeSectionOptions.content ? this.content.generate(activeSectionOptions.content) : this.content.reset();
                this.docBody.classList.add(this.cls.ready);
            }, 111);
        });
    }

    async backToReturn() {

        if (!helper.hasClass({ element: this.docBody, value: this.cls.backToHomeAnimate })) {

            this.docBody.classList.add(this.cls.backToHomeAnimate);

            if (this.stage) {
                this.stage.endAnim();
            }

            await helper.delay(1000);

            this.intro.animate(false);

            this.docBody.classList.remove(this.cls.ready);
            document.querySelectorAll(`.${this.cls.deActive}, .${this.cls.isActive}`).forEach((element) => element.classList.remove(this.cls.deActive, this.cls.isActive));

            await helper.delay(100);

            this.intro.animate(true);

            await helper.delay(2000);

            if (this.stage) {
                this.stage.clearLetters();
            }

            document.querySelector('main').removeAttribute('rel');
            this.docBody.classList.remove(this.cls.backToHomeAnimate);
            this._activeted = true;

        }
    }

    async newStage(activeRel) {
        if (this.stage) {
            this.stage.endAnim();
        }

        //await helper.delay(1000);

        const target = document.querySelector(`section[rel="${activeRel}"]`);
        const sib = helper.getSiblings(target);

        sib.forEach((element) => {
            element.classList.add(this.cls.deActive);
            element.classList.remove(this.cls.isActive);
        });

        target.classList.remove(this.cls.deActive);
        target.classList.add(this.cls.isActive);

        this.ID.setAttribute('rel', target.getAttribute('rel') || '');

        this.loadStage(activeRel);

    }

    layerCallback(obj) {
        if (this._activeted) {
            const evt = obj.evt;

            switch (obj.type) {
                case EVENT_TYPES.MOUSE_ENTER:
                    this.handleLayerMouseEnter(evt);
                    break;
                case EVENT_TYPES.MOUSE_LEAVE:
                    this.handleLayerMouseLeave();
                    break;
                case EVENT_TYPES.CLICK:
                    this.handleLayerClick(evt);
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
        this.initializePosition(false);
    }

    initializePosition(animated = false) {
        this.windowDimensions = helper.getWindowSize();
        this.layers.forEach((layer) => layer.initializePosition(animated));
        this.logo.initializePosition(animated);
    }

    resizeStop() {
        (this.stage && !this._activeted) && this.stage.adjust();
    }

    mouseMove(evt) {
        if (this._activeted) {
            //const obj = { ...this.windowDimensions, ...helper.getMousePos(evt) };
            const obj = { ...this.windowDimensions, ...evt };
            this.layers.forEach((layer) => layer.mouseMove(obj));
            this.logo.mouseMove(obj);
        }
    }
}

export default LayerManagement;