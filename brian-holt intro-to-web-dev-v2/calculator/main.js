let buttons = document.querySelectorAll('.calc-button'),
    operator, // Stores one of '+-*/' operator, when click '+-*/'
    previous; // Stores previous value on screen, when click '+-*/'
const screen = document.querySelector('.screen');

// Add Event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => navigator(e.target.innerText));
}

// Navigator function works like switch-case
function navigator(value) {
    if (value === 'C') { clean() }
    else if (value === '←') { back() }
    // Store the operator,
    // Store the previous value on screen,
    // Then wipe screen to '0'
    else if (value === '÷' || value === 'x' || value === '+' || value === '-') {
        previous = parseInt(screen.innerText);
        operator = value;
        screen.innerText = '0';
    }
    // Calculate the result
    else if (value === '=') { calculate() }
    // While pressing numbers
    else { screen.innerText === '0' ? screen.innerText = value : screen.innerText += value }
}

// calculate() uses previous and operator
function calculate() {
    let second = parseInt(screen.innerText);
    switch (operator) {
        case '+':
            screen.innerText = previous + second;
            break;
        case '-':
            screen.innerText = previous - second;
            break;
        case '÷':
            screen.innerText = previous / second;
            break;
        case 'x':
            screen.innerText = previous * second;
            break;
        default:
            break;
    }
    // After calculate the result, empty up variables
    previous, operator = null;
}

function clean() {
    screen.innerText = '0';
    previous, operator = null;
}

function back() {
    if (screen.innerText.length == 1) {
        screen.innerText = '0';
    } else {
        screen.innerText = screen.innerText.slice(0, -1);
    }
}