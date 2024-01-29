import config from '@root/config';
import Section from '@root/templates/section';

const sections = config.map(obj=>{
    var section = new Section(obj);
    return section.generate();
}).join('');

document.querySelector('main').innerHTML = sections;
console.log('hello world', sections);