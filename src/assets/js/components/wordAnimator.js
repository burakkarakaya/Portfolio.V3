class WordAnimate {
  constructor(elements) {
    this.words = elements;
    this.wordArray = [];
    this.currentWord = 0;

    this.init();
    //this.changeWord();
    window.wordAnimation = setInterval(() => this.changeWord(), 4000);
  }

  init() {
    this.words[this.currentWord].style.opacity = 1;
    this.words.forEach(word => this.splitLetters(word));
  }

  changeWord() {
    console.log('fdfdfdfdfd');
    const cw = this.wordArray[this.currentWord];
    const nw = this.currentWord === this.words.length - 1 ? this.wordArray[0] : this.wordArray[this.currentWord + 1];

    cw.forEach((letter, i) => this.animateLetterOut(cw, i));
    
    nw.forEach((letter, i) => {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, i);
    });

    this.currentWord = (this.currentWord === this.wordArray.length - 1) ? 0 : this.currentWord + 1;
  }

  animateLetterOut(wordArray, i) {
    setTimeout(() => {
      wordArray[i].className = 'letter out';
    }, i * 80);
  }

  animateLetterIn(wordArray, i) {
    setTimeout(() => {
      wordArray[i].className = 'letter in';
    }, 340 + (i * 80));
  }

  splitLetters(word) {
    const content = word.innerHTML;
    word.innerHTML = '';
    const letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      if (content.charAt(i) === ' ') {
        letter.innerHTML = '&nbsp;'; // Boşluk karakteri ekliyoruz.
      } else {
        letter.textContent = content.charAt(i);
      }
      word.appendChild(letter);
      letters.push(letter);
    }
    this.wordArray.push(letters);
  }
}

export default WordAnimate;