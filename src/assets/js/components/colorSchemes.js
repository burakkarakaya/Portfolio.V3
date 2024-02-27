class ColorSchemes {

    constructor(options) {
        this.options = options;
    }

    setColorRule(color){
        document.styleSheets[0].addRule(':root', `${color}`);
    }

    init() {

        const currentColorPalette = this.options[Math.floor((this.options.length - 1) * Math.random())];

        this.setColorRule(`--project-color: ${currentColorPalette[0]}`);
        this.setColorRule(`--skills-color: ${currentColorPalette[1]}`);
        this.setColorRule(`--awards-color: ${currentColorPalette[2]}`);
        this.setColorRule(`--contact-color: ${currentColorPalette[3]}`);
    }
}

export default ColorSchemes;