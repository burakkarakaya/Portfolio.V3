import config from '@root/config';

import { EVENT_TYPES } from '@root/enums';
import Events from '@root/events';
import TemplateManagement from '@root/templates/template';
import LayerManagement from '@root/components/layerManagement';
import AssetsLoader from '@root/components/assetsLoader';


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


new AssetsLoader(({ type, data }) => {
    if (type == 'success') {
        layerManagement.starting();
    }
});