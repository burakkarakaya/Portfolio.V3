import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

class Stage {
    constructor(options, originalSize, svgFileSrc, callback) {
        this.options = options;
        this.lettersOrginalSize = originalSize;
        this.svgFileSrc = svgFileSrc;

        //
        this.engine = null;
        this.world = null;
        this.render = null;
        this.mouseConstraint = null;
        this.content = null;

        //
        this.letterIsSleeping = true;
        this.letters = [];
        this.walls = {
            left: null,
            top: null,
            bottom: null,
            right: null,
        };

        //
        this.el = {
            canvas: '.stage',
            title: '.is-active svg.letters',
            path: 'path',
            content: '.sidebar'
        };

        this.cls = {
            ready: 'ready'
        };

        // DOM Elements
        this.canvas = document.querySelector(this.el.canvas);
        this.title = document.querySelector(this.el.title);
        this.paths = this.title.querySelectorAll(this.el.path);

        // Set Stage
        this.setScene();
        this.addEvents();
        this.setMouse();
        this.addWalls();

        // callback
        this.callback = callback;
    }

    updateProp(options, originalSize, svgFileSrc) {
        this.options = options;
        this.lettersOrginalSize = originalSize;
        this.svgFileSrc = svgFileSrc;

        this.canvas = document.querySelector(this.el.canvas);
        this.title = document.querySelector(this.el.title);
        this.paths = this.title.querySelectorAll(this.el.path);
    }

    init() {
        this.addLetters();
    }

    dispatchEvent({ type }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type });
        }
    }

    // Set Scene
    setScene() {

        this.engine = Matter.Engine.create({
            enableSleeping: true
        });

        this.world = this.engine.world;

        this.render = Matter.Render.create({
            element: document.body,
            engine: this.engine,
            canvas: this.canvas,
            options: {
                background: 'transparent',
                width: window.innerWidth,
                height: window.innerHeight,
                showAngleIndicator: false,
                showSleeping: false,
                wireframes: false
            }
        });

        Matter.Render.run(this.render);

        this.runner = Matter.Runner.create();
        Matter.Runner.run(this.runner, this.engine);
    }

    // Add Events
    addEvents() {
        const _self = this;
        Matter.Events.on(this.engine, 'afterUpdate', (evt) => {

            const _h = helper.elementHeight(_self.title);

            for (var i = _self.letters.length - 1; i >= 0; i--) {
                var letter = _self.letters[i];
                if (letter.position.y >= (window.innerHeight + _h)) {
                    Matter.Composite.remove(this.world, letter);
                    _self.letters.splice(i, 1);
                }
            }

        });
    }

    // Set Mouse
    setMouse() {
        this.mouse = Matter.Mouse.create(this.render.canvas);
        this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse: this.mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Matter.Composite.add(this.world, this.mouseConstraint);
        this.render.mouse = this.mouse;
        this.mouseConstraint.collisionFilter.mask = 0x0004 | 0x0008;
    }

    // Walls
    getWallPos(o) {
        o = o || {};
        const wt = window.innerWidth;
        const ht = window.innerHeight;
        const width = 10;
        const height = 10;
        const dir = o['direction'] || '';
        let pos = {};

        switch (dir) {
            case 'top':
                pos = { x: wt * .5, y: -ht, width: wt, height: height };
                break;

            case 'left':
                pos = { x: 0, y: ht * .5, width: width, height: ht };
                break;

            case 'right':
                pos = { x: wt, y: ht * .5, width: width, height: ht };
                break;

            case 'bottom':
                pos = { x: wt * .5, y: ht, width: wt, height: height };
                break;

            default:
                break;
        }

        return pos;
    }

    setWall({ dir = '', isStatic = true }) {

        const pos = this.getWallPos({ direction: dir });

        this.walls[dir] = Matter.Bodies.rectangle(
            pos.x,
            pos.y,
            pos.width,
            pos.height,
            {
                restitution: 1,
                isStatic: isStatic,
                collisionFilter: {
                    category: 0x0002
                },
                render: {
                    visible: false,
                }
            }
        );
        Matter.Composite.add(this.world, this.walls[dir]);
    }

    addWalls() {

        this.setWall({ dir: 'top', });
        this.setWall({ dir: 'left' });
        this.setWall({ dir: 'right' });
        this.setWall({ dir: 'bottom' });
    }

    updateWalls() {
        
        Object.entries(this.walls).forEach(([key, wall]) => {
            const pos = this.getWallPos({ direction: key });
            Matter.Body.set(wall, 'width', pos.width);
            Matter.Body.set(wall, 'height', pos.height);
            Matter.Body.setPosition(wall, { x: pos.x, y: pos.y });
        });
        
    }

    // Letters
    addLetters() {
        for (let i = 0; i < this.paths.length; ++i) {
            const path = this.paths[i];
            const letter = path.dataset.letter;
            const bounding = path.getBoundingClientRect();
            const fileSrc = this.svgFileSrc[letter];

            let xScale = 1;
            let yScale = 1;

            if (this.lettersOrginalSize[letter]) {
                xScale = bounding.width / this.lettersOrginalSize[letter].width;
                yScale = bounding.height / this.lettersOrginalSize[letter].height;
            }

            const _x = bounding.left + bounding.width / 2;

            const _y = bounding.top + bounding.height / 2;

            const _width = bounding.width;

            const _height = bounding.height + 20;

            const rectangle = Matter.Bodies.rectangle(_x, _y, _width, _height,
                {
                    friction: 1,
                    restitution: 1,
                    isSleeping: this.letterIsSleeping,

                    collisionFilter: {
                        category: 0x0004
                    },
                    render: {
                        sprite: {
                            texture: fileSrc,
                            xScale: xScale,
                            yScale: yScale
                        }
                    }
                }
            );

            Matter.Composite.add(this.world, rectangle);

            this.letters.push(rectangle);
        }
    }

    clearLetters() {
        for (var i = this.letters.length - 1; i >= 0; i--) {
            var letter = this.letters[i];
            Matter.Composite.remove(this.world, letter);
            this.letters.splice(i, 1);
        }
    }

    //
    adjust() {
        const wt = window.innerWidth;
        const ht = window.innerHeight;

        this.canvas.width = wt;
        this.canvas.height = ht;

        /*
        Matter.Composite.clear(this.world);
        Matter.Events.off(this.engine);

        this.setMouse();
        this.addWalls();
        this.addLetters();
        this.startAnim();

        */
        
        this.clearLetters();
        this.updateWalls();
        this.addLetters();
        this.startAnim();
    }

    destroy() {
        Matter.Render.stop(this.render);
        Matter.World.clear(this.engine.world);
        Matter.Engine.clear(this.engine);
        this.render.canvas.remove();
        this.render.canvas = null;
        this.render.context = null;
        this.render.textures = {};
    }

    reset(){
        const wt = window.innerWidth;
        const ht = window.innerHeight;

        this.canvas.width = wt;
        this.canvas.height = ht;

        this.updateWalls();
    }

    // animation
    startAnim() {
        for (let i = 0; i < this.letters.length; ++i) {
            const letter = this.letters[i];
            Matter.Body.set(letter, "isSleeping", false);
        }
    }

    endAnim() {

        for (var i = 0; i < this.letters.length; ++i) {
            var letter = this.letters[i];
            Matter.Body.set(letter, "isSleeping", false);
            Matter.Body.set(letter, 'isSensor', true);
        }
        
        Matter.Composite.rebase(this.world);
    }
}

export default Stage;