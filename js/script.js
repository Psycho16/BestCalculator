const clearButton = document.querySelector('.clear-button'),
      removeButton = document.querySelector('.remove-button'),
      divideButton = document.querySelector('.divide-button'),
      residueButton = document.querySelector('.residue-button'),
      multiplyButton = document.querySelector('.multiply-button'),
      minusButton = document.querySelector('.minus-button'),
      plusButton = document.querySelector('.plus-button')
      pointButton = document.querySelector('.point-button'),
      equalButton = document.querySelector('.equal-button'),
      calcInput = document.querySelector('.calc-input');
const numberButtons = [document.querySelector('.zero-button'), document.querySelector('.one-button'),
document.querySelector('.two-button'), document.querySelector('.three-button'), document.querySelector('.four-button'),
document.querySelector('.five-button'), document.querySelector('.six-button'), document.querySelector('.seven-button'),
document.querySelector('.eight-button'), document.querySelector('.nine-button')]

let date = new Date();
// setInterval(console.log(date.getSeconds()), 1000);

function addSymbol(symbolTypes) {
  calcInput.value += symbolTypes;
}

divideButton.addEventListener('click', () => addSymbol(" / "));
multiplyButton.addEventListener('click', () => addSymbol(" * "));
minusButton.addEventListener('click', () => addSymbol(" - "));
plusButton.addEventListener('click', () => addSymbol(" + "));
pointButton.addEventListener('click', () => addSymbol("."));
numberButtons[0].addEventListener('click', () => addSymbol("0"));
numberButtons[1].addEventListener('click', () => addSymbol("1"));
numberButtons[2].addEventListener('click', () => addSymbol("2"));
numberButtons[3].addEventListener('click', () => addSymbol("3"));
numberButtons[4].addEventListener('click', () => addSymbol("4"));
numberButtons[5].addEventListener('click', () => addSymbol("5"));
numberButtons[6].addEventListener('click', () => addSymbol("6"));
numberButtons[7].addEventListener('click', () => addSymbol("7"));
numberButtons[8].addEventListener('click', () => addSymbol("8"));
numberButtons[9].addEventListener('click', () => addSymbol("9"));
// divideButton.addEventListener('click', () => console.log("click"));

function delZero(number) {
  if (number.startsWith("0")) return number.slice(1); 
}
function fixDate(date) {
  let [day, month, year] = date.split('.');
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  return delZero(day) + " " + months[delZero(month) - 1] + " " + year;
}
window.setInterval(function() {
  let now = new Date();
  let clock = document.querySelector('.current-time');
  let date = document.querySelector('.current-date');
  date.innerHTML = fixDate(now.toLocaleDateString());
  clock.innerHTML = now.toLocaleTimeString();
}, 1000);
clearButton.addEventListener('click', function() {alert('кнопка стереть всё')});

