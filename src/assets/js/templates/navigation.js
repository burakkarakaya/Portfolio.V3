class Navigation{
    constructor(options){
        this.options = options;
    }
    generate(){
        const { key, button } = this.options;
        return `<a href="javascript:void(0);" rel="${key}"><i></i><span>${button.title}</span></a>`;
    }
}

export default Navigation;