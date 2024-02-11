import config from '@root/config';

import { EVENT_TYPES } from '@root/enums';
import Events from '@root/events';
import TemplateManagement from '@root/templates/template';
import LayerManagement from '@root/components/layerManagement';

const main = document.querySelector('main');

new TemplateManagement({ ID: main, options: config }).init();

const layerManagement = new LayerManagement(main, config);

new Events((obj) => {

    switch (obj.type) {
        case EVENT_TYPES.RESIZE:
            layerManagement.adjust();
            break;

        case EVENT_TYPES.MOUSE_MOVE:
            layerManagement.mouseMove(obj.evt);
            break;

        case EVENT_TYPES.MOUSE_LEAVE:
            //layerManagement.adjust();
            break;

        default:
            break;
    }
}).init();

setTimeout(() => {
    layerManagement.activeted = true;
}, 2000);