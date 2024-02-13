import { EVENT_TYPES } from '@root/enums';

class Events {
    constructor(callback) {
        this.callback = callback;
        this.timeOutFunctionId;
        this.duration = 555;
    }

    handleEvent({ type, evt }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type, evt });
        }
    }

    onAdjust(evt) {
        this.handleEvent({ type: EVENT_TYPES.RESIZE, evt: evt });

        clearTimeout(this.timeOutFunctionId);
        this.timeOutFunctionId = setTimeout(() => {
            this.handleEvent({ type: EVENT_TYPES.RESIZE_STOP, evt: evt });
        }, this.duration);
    }

    onMouseMove(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_MOVE, evt: evt });
    }

    onMouseEnter(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_ENTER, evt: evt });
    }

    onMouseLeave(evt) {
        this.handleEvent({ type: EVENT_TYPES.MOUSE_LEAVE, evt: evt });
    }

    addEventListeners() {
        window.addEventListener('resize', this.onAdjust.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        document.addEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        document.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    }

    removeEventListeners() {
        window.removeEventListener('resize', this.onAdjust.bind(this), false);
        document.removeEventListener('mousemove', this.onMouseMove.bind(this), false);
        document.removeEventListener('mouseenter', this.onMouseEnter.bind(this), false);
        document.removeEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    }

    init() {
        this.addEventListeners();
        this.onAdjust(new Event('resize'));
        this.onMouseMove(new Event('mousemove'));
    }

    destroy() {
        this.removeEventListeners();
    }
}

export default Events;