class Calculator {
    constructor(previousTextElement, currenTextElement) {
        this.previousTextElement = previousTextElement;
        this.currenTextElement = currenTextElement;
    }
}

const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const clearBtn = document.querySelector("[data-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const previousTextElement = document.querySelector("[data-pervious-operand]");
const currenTextElement = document.querySelector("[data-current-operand]");

