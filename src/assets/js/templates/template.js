import Section from './section';
import Button from './button';
import Logo from './logo';

class TemplateManagement{
    constructor({ID, options}){
        this.ID = ID;
        this.options = options;
    }

    init(){
        const sections = this.options.map(obj=>new Section(obj).generate());
        const buttons = this.options.map(obj=> obj.button && new Button(obj).generate());
        const logo = new Logo().generate();

        this.ID.innerHTML = `${sections.join('')}${buttons.join('')}${logo}<span class="intro"></span><canvas class="stage"></canvas>`;
    }
}

export default TemplateManagement;