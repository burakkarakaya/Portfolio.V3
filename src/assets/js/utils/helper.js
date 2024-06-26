export function getMousePos(e) {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
}

export function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}

export function removeClass(o) {
    o = o || {};
    var cls = o['cls'] || '';

    if (o.ID.length > 0)
        forEach(o.ID, function (ind, item) {
            if (cls != '')
                item.classList.remove(cls);
        });
}

export function addClass(o) {
    o = o || {};
    var cls = o['cls'] || '';

    if (o.ID.length > 0)
        forEach(o.ID, function (ind, item) {
            if (cls != '')
                item.classList.add(cls);
        });
}

export function getDegree(n) {
    return (n / 360) * Math.PI * 2;
}

export function getElementOffset(el) {
    /* https://muffinman.io/javascript-get-element-offset/ */
    let top = 0;
    let left = 0;
    let element = el;

    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top,
        left,
    };
}

export function getWindowSize() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return { width: windowWidth, height: windowHeight, centerX: Math.round(windowWidth * .5), centerY: Math.round(windowHeight * .5) };
};

export function getSiblings(elem) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;

};

export function loadTexture(svg, callback) {

    const entriesArray = Object.entries(svg);

    const letters = entriesArray.map(([key, value]) => ({ key, value }));

    let start = 0;

    const end = letters.length - 1;

    const originalSize = {};

    const load = (ind) => {
        const key = letters[ind]['key'];
        const src = letters[ind]['value'];
        const img = new Image();

        img.onload = function () {
            originalSize[key] = {
                width: this.width,
                height: this.height
            };

            if (ind < end) {
                ++ind;
                load(ind);
            } else {
                if (typeof callback !== 'undefined')
                    callback(originalSize);
            }
        };

        img.src = src;
    };

    load(start);

}

export function elementHeight(elm) {
    var elmHeight, elmMargin;
    if (document.all) {// IE
        elmHeight = elm.currentStyle.height;
        elmMargin = parseInt(elm.currentStyle.marginTop, 10) + parseInt(elm.currentStyle.marginBottom, 10);
    } else {// Mozilla
        elmHeight = document.defaultView.getComputedStyle(elm, '').getPropertyValue('height');
        elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-bottom'));
    }
    return (parseFloat(elmHeight) + parseFloat(elmMargin));
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}

export function hasClass(o) {
    o = o || {};
    var elm = o['element'] || {},
        classList = elm.classList || '', // classList
        value = (o['value'] || '').replace(/\./g, ''); // içerisinde bakilacak class

    return classList.contains(value) || false;
}

export function flattenObject(obj, parentKey = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = parentKey ? `${parentKey}${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], `${newKey}-`));
        } else {
            acc[newKey] = obj[key];
        }

        return acc;
    }, {});
};


export function throttle(callback, delay) {
    let lastTime = 0;
    return function () {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            callback.apply(null, arguments);
            lastTime = now;
        }
    };
}

export function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}

export function isLightingColor(color) {
    var hex = color.replace('#', ''); // HEX değeri temizle
    var r = parseInt(hex.substring(0, 2), 16); // Kırmızı bileşenini al
    var g = parseInt(hex.substring(2, 4), 16); // Yeşil bileşenini al
    var b = parseInt(hex.substring(4, 6), 16); // Mavi bileşenini al
    var sum = r + g + b; // Rengin toplamı

    // Toplamın 382'den büyük olması, çok parlak bir renge işaret eder
    return sum > 382;
}


export const mobile = function () { return { detect: function () { var uagent = navigator.userAgent.toLowerCase(); var list = this.mobiles; var ismobile = false; for (var d = 0; d < list.length; d += 1)if (uagent.indexOf(list[d]) != -1) ismobile = true; return ismobile }, mobiles: ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod", "android", "ipad"] } }();
