class SvgGenerator {
    constructor({ fill, width, height, letters }) {
        this.fill = fill;
        this.width = width;
        this.height = height;
        this.letters = letters;
    }

    generatePaths() {
        return this.letters.map(letter => `<path fill="${this.fill}" data-letter="${letter.key}" d="${letter.path}" vector-effect="non-scaling-stroke" />`).join('');
    }

    generateSvgMarkup() {
        const paths = this.generatePaths();
        return `<svg class="letters" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" fill-rule="evenodd" font-size="9pt">${paths}</g></svg>`;
    }
}

class Section{
    constructor(options){
        this.options = options;
    }

    generate(){
        const svgGenerator = new SvgGenerator(this.options.svg);
        const svgMarkup = svgGenerator.generateSvgMarkup();

        return `<section rel="${this.options.key}"><i></i>${svgMarkup}</section>`;
    }
}

export default Section;