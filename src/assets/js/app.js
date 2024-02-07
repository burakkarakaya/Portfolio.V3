import config from '@root/config';

import { Events, EVENT_TYPES } from '@root/events';
import TemplateManagement from '@root/templates/template';
import LayerManagement from '@root/components/layerManagement';

new TemplateManagement({ ID: document.querySelector('main'), options: config }).init();

const layerManagement = new LayerManagement(config);

new Events((obj) => {

    switch (obj.type) {
        case EVENT_TYPES.RESIZE:
            layerManagement.adjust();
            break;

        case EVENT_TYPES.MOUSE_MOVE:
            layerManagement.mouseMove(obj.evt);
            break;
        default:
            break;
    }
}).init();

setTimeout(() => {
    layerManagement.activeted = true;
}, 2000);