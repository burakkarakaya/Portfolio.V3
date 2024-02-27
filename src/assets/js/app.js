import * as helper from '@root/utils/helper';

import pngFileSrc from '@images/**/*.png';
import svgFileSrc from '@svg/**/*.svg';

import {config, colorSchemes} from '@root/config';

import { EVENT_TYPES } from '@root/enums';
import Events from '@root/events';

import TemplateManagement from '@root/templates/template';

import ColorSchemes from '@root/components/colorSchemes';
import LayerManagement from '@root/components/layerManagement';
import AssetsLoader from '@root/components/assetsLoader';


new ColorSchemes(colorSchemes).init();

const main = document.querySelector('main');

new TemplateManagement({ ID: main, options: config }).init();

window.layerManagement = new LayerManagement(main, config);

new Events((obj) => {

    switch (obj.type) {
        case EVENT_TYPES.RESIZE:
            layerManagement.adjust();
            break;

        case EVENT_TYPES.RESIZE_STOP:
            layerManagement.resizeStop();
            break;

        case EVENT_TYPES.MOUSE_MOVE:
            layerManagement.mouseMove(obj.evt);
            break;

        case EVENT_TYPES.MOUSE_LEAVE:
            //layerManagement.initializePosition(true);
            break;

        default:
            break;
    }
}).init();

new AssetsLoader({...pngFileSrc, ...helper.flattenObject(svgFileSrc.sections
    )}, ({ type, data }) => {
    if (type == 'success') {
        layerManagement.starting();
    }
});

/*
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Assign random colors to SASS variables
document.styleSheets[0].addRule(':root', `--project-color: ${getRandomColor()}`);
document.styleSheets[0].addRule(':root', `--skills-color: ${getRandomColor()}`);
document.styleSheets[0].addRule(':root', `--awards-color: ${getRandomColor()}`);
document.styleSheets[0].addRule(':root', `--contact-color: ${getRandomColor()}`);
*/