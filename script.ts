const spanOne: HTMLSpanElement | null = document.querySelector('.one')
const spantwo: HTMLSpanElement | null = document.querySelector('.two')

const input: HTMLInputElement | null = document.querySelector('.input')
const paragraph: HTMLParagraphElement | null = document.querySelector('.result')

const ConvButton: HTMLButtonElement | null = document.querySelector('.convert')
const resetButton: HTMLButtonElement | null  = document.querySelector('.reset')
const swapButton: HTMLButtonElement | null = document.querySelector('.swap')

function convert() {
    if(spanOne && spanOne.textContent === 'C') {
        if (input) {
        let inputValue = input.value
        let FDegree: number = inputValue * 1.8 + 32
        let roundF: number = Math.round(FDegree * 10) / 10
        
        if (paragraph) {
        paragraph.textContent = `${roundF}`
        }
    }
    } else {
        if(input && paragraph) {
        let inputValue = input.value
        let CDegree: number = (inputValue - 32) * 0.55
        let roundC = Math.round(CDegree * 10) / 10
        paragraph.textContent = `${roundC}`
        }
    }
}
function reset() {
    if(input && paragraph) {
    input.value = ''
    paragraph.textContent = ''
    }
}

function swap() {
    if (spantwo && spanOne && spanOne.innerText === 'C') {
        spanOne.textContent = 'F'
        spantwo.textContent = 'C'
    } else {
        if (spanOne && spantwo) {
       spanOne.textContent = 'C'
        spantwo.textContent = 'F'
        }
    }
}



ConvButton?.addEventListener('click', convert)
resetButton?.addEventListener('click', reset)
swapButton?.addEventListener('click', swap)