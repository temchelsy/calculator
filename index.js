const monitor = document.getElementById('screen')

function clr () {
  monitor.value = ''
}
clr()

// function del () {
//   if (monitor.value.length > 0) {
//     const screenSplit = monitor.value.split('')
//     screenSplit.pop()
//     const screenJoin = screenSplit.value.join('')
//     monitor.value = screenJoin
//   }
// }

function plusMinus () {
  const currentNum = parseFloat(monitor.value)
  monitor.value = -currentNum
}

function arithmeticOperation (a, b, sign) {
  if (b == 0 && a / b) {
    return 'error'
  }
  switch (sign) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    case '%':
      return a % b
    case '.':
      return a.b
    case '-/+':
      return plusMinus()
    case 'AC':
      return clr()
    default:
      monitor.value = 'Error'
      break
  }
}
// console.log(arithmeticOperation(5, 4, '-'))
// console.log(arithmeticOperation(1, 0, '/'))

function show (val) {
  monitor.value += val
}
show('')

function mathOperation () {
  const equation = monitor.value
  const operator = equation.match(/[/*-+%]/)[0]
  const vals = equation.split(operator)
  console.log(vals, operator)
  const result = arithmeticOperation(+vals[0], +vals[1], operator)
  monitor.value = result
}
mathOperation()
