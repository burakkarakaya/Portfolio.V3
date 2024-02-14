class Intro {
    constructor() {

        this.element = document.querySelector('.intro');
        this.cls = {
            animate: 'animate'
        };
    }

    animate(b){
        if (b)
            this.element.classList.add(this.cls.animate);
        else
            this.element.classList.remove(this.cls.animate);
    }
}

export default Intro;