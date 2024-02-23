import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

class Events {
    constructor(callback) {
        this.callback = callback;
        this.timeOutFunctionId;
        this.duration = 555;

        this.throttledMouseMove = helper.throttle(this.onMouseMove.bind(this), 16);
        
        const windowDimensions = helper.getWindowSize();
        this._mousePosition = { x: windowDimensions.centerX, y: windowDimensions.centerY };
        this.reAnimate = this.reAnimate.bind(this);
    }

    handleEvent({ type, evt }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type, evt });
        }
    }

    onAdjust(evt) {
        this.handleEvent({ type: EVENT_TYPES.RESIZE, evt: evt });

        if (this.timeOutFunctionId)
            clearTimeout(this.timeOutFunctionId);
        
        this.timeOutFunctionId = setTimeout(() => {
            this.handleEvent({ type: EVENT_TYPES.RESIZE_STOP, evt: evt });
        }, this.duration);
    }

    reAnimate(){
        this.handleEvent({ type: EVENT_TYPES.MOUSE_MOVE, evt: this._mousePosition });
        window.requestAnimationFrame(this.reAnimate);
    }

    onMouseMove(evt) {
        this._mousePosition = helper.getMousePos(evt);
        //this.handleEvent({ type: EVENT_TYPES.MOUSE_MOVE, evt: evt });
    }

    onMouseEnter(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_ENTER, evt: evt });
    }

    onMouseLeave(evt) {
        const windowDimensions = helper.getWindowSize();
        this._mousePosition = { x: windowDimensions.centerX, y: windowDimensions.centerY };
        this.handleEvent({ type: EVENT_TYPES.MOUSE_LEAVE, evt: evt });
    }

    addEventListeners() {
        window.addEventListener('resize', this.onAdjust.bind(this), false);
        document.addEventListener('mousemove', this.throttledMouseMove, false);
        document.addEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        document.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    }

    removeEventListeners() {
        window.removeEventListener('resize', this.onAdjust.bind(this), false);
        document.removeEventListener('mousemove', this.throttledMouseMove, false);
        document.removeEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        document.removeEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    }

    init() {
        this.addEventListeners();
        this.onAdjust(new Event('resize'));
        this.reAnimate();
        //this.onMouseMove(new Event('mousemove'));
    }

    destroy() {
        this.removeEventListeners();
    }
}

export default Events;