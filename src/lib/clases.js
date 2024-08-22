export class ExerciceOption {
  constructor(isCorrect, text, element) {
    this.isCorrect = isCorrect;
    this.text = text;
    this.element = element;
  }

  setDisabled() {
    this.element.disabled = true;
  }

  isAValidOption() {
    return this.isCorrect;
  }

  addStylesOfOptionType() {
    if (this.isCorrect) {
      this.element.classList.add("correct");
    } else {
      this.element.classList.add("incorrect");
    }
  }

  getElement() {
    return this.element;
  }
}
