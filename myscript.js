class Calculator {
    constructor(previousTextElement, currenTextElement) {
        this.previousTextElement = previousTextElement;
        this.currenTextElement = currenTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    choseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = "";
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currenTextElement.innerText = this.currentOperand;
        if (this.operation !== null) {
            this.previousTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        }
    }
}

const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const clearBtn = document.querySelector("[data-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const previousTextElement = document.querySelector("[data-pervious-operand]");
const currenTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator (previousTextElement, currenTextElement)

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.choseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearBtn.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})