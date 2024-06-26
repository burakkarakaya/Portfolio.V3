import Section from './section';
import Button from './button';
import Navigation from './navigation';
import Logo from './logo';

class TemplateManagement{
    constructor({ID, options}){
        this.ID = ID;
        this.options = options;
    }

    init(){
        const sections = this.options.map(obj=>new Section(obj).generate());
        const buttons = this.options.map(obj=> obj.button && new Button(obj).generate());
        const navigation = this.options.map(obj=> obj.button && `<li>${new Navigation(obj).generate()}</li>`);
        const logoCenter = new Logo({ cls: 'center' }).generate();
        const logoTop = new Logo({ cls: 'top' }).generate();

        this.ID.innerHTML = `${sections.join('')}${buttons.join('')}${logoTop}<ul class="navigation">${navigation.join('')}</ul>${logoCenter}<span class="intro"></span><div class="contents"></div><canvas class="stage"></canvas><div class="myname">Burak Karakaya</div>`;
    }
}

export default TemplateManagement;