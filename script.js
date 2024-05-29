const spanOne = document.querySelector('.one')
const spantwo = document.querySelector('.two')

const input = document.querySelector('.input')
const paragraph = document.querySelector('.result')

const ConvButton = document.querySelector('.convert')
const resetButton = document.querySelector('.reset')
const swapButton = document.querySelector('.swap')


function convert() {
    if(spanOne.textContent === 'C') {
        let FDegree = input.value * 1.8 + 32
        let roundF = Math.round(FDegree * 10) / 10
        paragraph.textContent = `${roundF}`
    } else {
        let CDegree = (input.value - 32) * 0.55
        let roundC = Math.round(CDegree * 10) / 10
        paragraph.textContent = `${roundC}`
    }
}
function reset() {
    input.value = ''
    paragraph.textContent = ''
}

function swap() {
    if (spanOne.innerText === 'C') {
        spanOne.textContent = 'F'
        spantwo.textContent = 'C'
    } else {
        spanOne.textContent = 'C'
        spantwo.textContent = 'F'
    }
}



ConvButton.addEventListener('click', convert)
resetButton.addEventListener('click', reset)
swapButton.addEventListener('click', swap)