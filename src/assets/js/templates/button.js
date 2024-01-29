class Button{
    constructor(options){
        this.options = options;
    }
    get generate(){
        const { key, title } = this.options;
        return `<button rel="${key}">${title}</button>`;
    }
}

export default Button;