import * as helper from '@root/utils/helper';

import Layer from './layer';

class LayerManagement{
    constructor(options) {
        this.layers = options.map(obj => new Layer(obj));
        this._activeted = false;
        this.adjust();
    }

    get activeted(){
        return this._activeted;
    }

    set activeted(b){
        this._activeted = b;
    }

    adjust() {
        this.windowDimensions = helper.getWindowSize();

        this.layers.forEach((layer) => layer.initializePosition());
    }

    mouseMove(evt) {
        if (this._activeted){
            const obj = Object.assign({}, this.windowDimensions, helper.getMousePos(evt));
            this.layers.forEach((layer) => layer.mouseMove(obj));
        }
    }
}

export default LayerManagement;