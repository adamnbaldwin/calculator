let val1 = ''
let val2 = ''
let currentOperation = null
let shouldClearScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const lastScreen = document.getElementById('lastOppScreen')
const currentScreen = document.getElementById('currentOppScreen')

equalsButton.addEventListener('click', calculate)
clearButton.addEventListener('click', clear)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => addNumToScreen(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => prepOperation(button.textContent))
)

function addNumToScreen(number) {
  if (currentScreen.textContent === '0' || shouldClearScreen)
    clearScreen()
  currentScreen.textContent += number
}

function clearScreen() {
  currentScreen.textContent = ''
  shouldClearScreen = false
}

function clear() {
  currentScreen.textContent = ''
  lastScreen.textContent = ''
  val1 = ''
  val2 = ''
  currentOperation = null
}


function prepOperation(operator) {
  if (currentOperation !== null) calculate()
  val1 = currentScreen.textContent
  currentOperation = operator
  clearScreen();
  lastScreen.textContent = `${val1} ${currentOperation}`;
  shouldClearScreen = true;
}



function calculate() {
  if (currentOperation === null || shouldClearScreen) return
  if (currentOperation === '÷' && currentScreen.textContent === '0') {
    return
  }
  val2 = currentScreen.textContent
  currentScreen.textContent = roundResult(
    operate(currentOperation, val1, val2)
  )
  lastScreen.textContent = `${val1} ${currentOperation} ${val2} =`
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}


function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}


function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}