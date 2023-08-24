
function evaluate() {
  if (currentOperation === null || shouldClearScreen) return
  if (currentOperation === '÷' && currentScreen.textContent === '0') {
    alert("You can't divide by 0!")
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