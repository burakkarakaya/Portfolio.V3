class Button{
    constructor(options){
        this.options = options;
    }
    generate(){
        const { key, button } = this.options;
        return `<button rel="${key}"><i></i><span>${button.title}</span></button>`;
    }
}

export default Button;