const btn = document.querySelectorAll('.btn');
const impuls = document.querySelector('.impuls');
const impulsWrapper = document.querySelector('.impuls-wrapper');
let formOrder = document.getElementById('form');
const formObject = {};


function displayForm() {
    formOrder.classList.remove('hidden');
    formOrder.classList.add('displayed');
};

btn.forEach(
    function (node) {
        node.onclick = (event) => displayForm();
    }
);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const payment = document.getElementById('payment');

    const formValues = new FormData(form);



    if (name.value == '' || surname.value == '') {
        name.classList.add('error');
        surname.classList.add('error');
        let notification = document.createElement('div');
        notification.classList.add('error');
        notification.innerHTML = 'some of fields are missed';
        notification.id = 'error';
        if (document.getElementById('error')) {
            return;
        } else {
            formOrder.prepend(notification);
            return;
        }

    } else if (name.value !== '' || surname.value !== '') {
        name.classList.remove('error');
        surname.classList.remove('error');
        if (document.getElementById('error')) {
            document.getElementById('error').remove();
        }
    }

    for (const value of formValues) {
        if (!formObject[value[0]]) {
            formObject[value[0]] = value[1];
        } else {
            formObject[value[0]] = `${formObject[value[0]]}, ${value[1]}`;
        }

    }

    if (formObject.payment === undefined) {
        payment.classList.add('error');
        return;
    } else {
        payment.classList.remove('error');
    }
    const invoice = document.createElement('div');
    invoice.textContent = `Mr. ${formObject['full_name']} just ordered ${formObject['quantity']} of chairs. Delivery to ${formObject['city']} to ${formObject['store']}, pay method: ${formObject['payment']}`;
    invoice.classList.add('error');
    impulsWrapper.replaceChild(invoice, formOrder);
})