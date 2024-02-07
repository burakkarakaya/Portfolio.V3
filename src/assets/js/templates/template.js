import Section from './section';
import Button from './button';

class TemplateManagement{
    constructor({ID, options}){
        this.ID = ID;
        this.options = options;
    }

    init(){
        const sections = this.options.map(obj=>new Section(obj).generate());
        const buttons = this.options.map(obj=>new Button(obj).generate());
        this.ID.innerHTML = `${sections.join('')}${buttons.join('')}`;
    }
}

export default TemplateManagement;