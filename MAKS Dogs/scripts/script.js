const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('.submit');
let isItEmpty = true;

const createAlert = (text, color) => {
    const alert = document.createElement('div')
    alert.innerHTML = text;
    alert.setAttribute('class', `alert ${color}`)
    setTimeout(() => {
        $('.alert').animate({
            opacity: '0'
        }, 500)
    }, 2000)
    document.querySelector('.navbar').appendChild(alert);
    $('.alert').animate({
        top: '100px'
    }, 330)
}


submit.addEventListener('click', e => {
    e.preventDefault();
    if(name.value.replaceAll(' ', '') === '' || email.value.replaceAll(' ', '') === '' || message.value.replaceAll(' ', '') === '' ){ 
        createAlert('Моля попълнете всичко', 'red')
    } else {
        createAlert('Съобщението е изпратено', 'green');
    }
})