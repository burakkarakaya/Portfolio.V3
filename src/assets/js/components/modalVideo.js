class VideoModal {
    constructor() {

        this.element = {
            modal: '.custom-modal',
            closeBtn: '.custom-modal .close-button-holder',
            iframe: '.custom-modal iframe'
        };

        this.cls = {
            open: 'open'
        }

        this.hide = this.hide.bind(this);

        this.template = `
            <div class="custom-modal video">
                <div class="modal-content">

                    <div class="close-button-holder"> 
                        <a href="javascript:void(0);" class="close before after">
                            <span class="ghost"></span>
                        </a> 
                    </div>

                    <iframe
                        id="videoFrame"
                        width="560"
                        height="315"
                        src="{{src}}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;

    }

    getTemplate(o) {
        return this.template.replace(/{{src}}/g, o.src || '');
    }

    addEvent(){
        document.querySelector(this.element.closeBtn).addEventListener('click', this.hide);
    }

    async show(o) {

        document.body.insertAdjacentHTML('beforeend', this.getTemplate({ src: o.src || '' }));

        await new Promise(resolve => requestAnimationFrame(resolve));

        setTimeout(() => {
            document.querySelector(this.element.modal).classList.add(this.cls.open);
        }, 222);
        

        this.addEvent();
    }

    hide() {
        document.querySelector(this.element.iframe).removeAttribute('src');
        document.querySelector(this.element.modal).parentNode.removeChild(document.querySelector(this.element.modal));
    }
}

export default VideoModal;