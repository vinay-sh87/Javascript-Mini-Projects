const buttonsContainer = document.querySelector('.buttons');
const result = document.getElementById('expr');
const preview = document.getElementById('preview');

let expression = ''

buttonsContainer.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    console.log(event.target.textContent);
    result.value += event.target.textContent;

    if (event.target.textContent === 'C') {
        result.value = '';
        expression = '';
        preview.innerHTML = '';
        return;
    }
    if (event.target.textContent === '←') {
        expression = expression.slice(0, -1);
        result.value = expression;
        preview.innerHTML = expression;
        return;
    }
    if (event.target.textContent === '=') {
        try {
            result.value = eval(expression);
            expression = String(result.value);
        } catch {
            result.value = 'Error';
            preview.innerHTML = 'Error';
            expression = '';
        }
    }
    else {
        expression += event.target.textContent;
        result.value = expression;
    }
    preview.innerHTML = eval(expression);
    return;

})