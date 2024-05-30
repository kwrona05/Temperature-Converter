var spanOne = document.querySelector('.one');
var spantwo = document.querySelector('.two');
var input = document.querySelector('.input');
var paragraph = document.querySelector('.result');
var ConvButton = document.querySelector('.convert');
var resetButton = document.querySelector('.reset');
var swapButton = document.querySelector('.swap');
function convert() {
    if (spanOne && spanOne.textContent === 'C') {
        if (input) {
            var inputValue = input.value;
            var FDegree = parseFloat(inputValue) * 1.8 + 32;
            var roundF = Math.round(FDegree * 10) / 10;
            if (paragraph) {
                paragraph.textContent = "".concat(roundF);
            }
        }
    }
    else {
        if (input && paragraph) {
            var inputValue = input.value;
            var CDegree = (parseFloat(inputValue) - 32) * (5 / 9);
            var roundC = Math.round(CDegree * 10) / 10;
            paragraph.textContent = "".concat(roundC);
        }
    }
}
function reset() {
    if (input && paragraph) {
        input.value = '';
        paragraph.textContent = '';
    }
}
function swap() {
    if (spantwo && spanOne && spanOne.innerText === 'C') {
        spanOne.textContent = 'F';
        spantwo.textContent = 'C';
    }
    else {
        if (spanOne && spantwo) {
            spanOne.textContent = 'C';
            spantwo.textContent = 'F';
        }
    }
}
ConvButton === null || ConvButton === void 0 ? void 0 : ConvButton.addEventListener('click', convert);
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', reset);
swapButton === null || swapButton === void 0 ? void 0 : swapButton.addEventListener('click', swap);
