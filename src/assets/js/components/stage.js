import * as helper from '@root/utils/helper';
import { EVENT_TYPES } from '@root/enums';

class Stage {
    constructor(options, originalSize, svgFileSrc, callback) {
        this.options = options;
        this.lettersOrginalSize = originalSize;
        this.svgFileSrc = svgFileSrc;

        this.engine = null;
        this.world = null;
        this.render = null;
        this.mouseConstraint = null;
        this.content = null;
        this.el = {
            canvas: '.stage',
            title: '.is-active svg.letters',
            path: 'path',
            content: '.sidebar'
        };
        this.cls = {
            ready: 'ready'
        };
        this.walls = {
            left: null,
            top: null,
            bottom: null,
            right: null,
        };
        this.letterIsSleeping = true;
        this.letters = [];

        this.canvas = document.querySelector(this.el.canvas);
        this.title = document.querySelector(this.el.title);
        this.paths = this.title.querySelectorAll(this.el.path);

        this.endAnimStart = false;

        this.setScene();

        this.callback = callback;
    }

    dispatchEvent({ type }) {
        if (typeof this.callback !== 'undefined') {
            this.callback({ type });
        }
    }

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
                    //fillStyle: '#000'
                }
            }
        );
        Matter.Composite.add(this.world, this.walls[dir]);
    }

    addWalls() {

        this.setWall({ dir: 'top',  });
        this.setWall({ dir: 'left' });
        this.setWall({ dir: 'right' });
        this.setWall({ dir: 'bottom' });
    }

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

        // tüm harfler sahne dışına çıktığında tetiklenecek 
        /*Matter.Events.on(this.engine, 'afterUpdate', (evt)=>{

            if (this.endAnimStart){
                const _h = helper.elementHeight(this.title); 
                const b = this.letters.every((k)=>k.position.y >= (window.innerHeight + _h));
                if (b){
                    this.endAnimStart = false;

                    this.dispatchEvent({ type: EVENT_TYPES.ANIMATION_END });
                }
            }
        });*/
    }

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

    adjust() {
        const wt = window.innerWidth;
        const ht = window.innerHeight;

        this.canvas.width = wt;
        this.canvas.height = ht;

        Matter.Composite.clear(this.world);
        Matter.Events.off(this.engine);

        this.setMouse();
        this.addWalls();
        this.addLetters();
        this.startAnim();
    }

    init() {
        this.setMouse();
        this.addWalls();
        this.addLetters();
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

    //
    updateProp(options, originalSize, svgFileSrc){
        this.options = options;
        this.lettersOrginalSize = originalSize;
        this.svgFileSrc = svgFileSrc;

        this.canvas = document.querySelector(this.el.canvas);
        this.title = document.querySelector(this.el.title);
        this.paths = this.title.querySelectorAll(this.el.path);
    }
    
    // animation
    startAnim() {
        const n = this.letters.length;
        const c = Math.round(n * .5);

        for (let i = 0; i < n; ++i) {
            const letter = this.letters[i];
            const pos = (i <= c ? -.9 : .7) * (i * .1);

            Matter.Body.set(letter, "isSleeping", false);
            //Matter.Body.applyForce(letter, { x: letter.position.x, y: letter.position.y }, { x: pos, y: 0 });
        }
    }

    endAnim(){

        this.endAnimStart = true;

        Matter.Body.set(this.walls['bottom'], 'isStatic', false);

        Matter.Body.set(this.walls['bottom'], 'position', { y: window.innerHeight * 2 });

        for (var i = 0; i < this.letters.length; ++i) {
            var letter = this.letters[i];
            Matter.Body.applyForce(letter, { x: letter.position.x, y: letter.position.y }, { x: 0, y: -0.01 });
        }
    }
}

export default Stage;