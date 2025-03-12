function openModal() {
    event.preventDefault();
    document.getElementById('modal').style.display = 'flex';
    document.body.classList.add('modal-open'); 
}

function closeModal(event) {
    if (event.target.id === 'modal' || event.target.classList.contains('close-btn')) {
        document.getElementById('modal').style.display = 'none';
        document.body.classList.remove('modal-open');

        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('vin').value = '';
        document.getElementById('description').value = '';

        document.getElementById('error-message').textContent = '';
        document.getElementById('vin-error-message').textContent = '';

        document.getElementById('name').classList.remove('error');
        document.getElementById('contact').classList.remove('error');
        document.getElementById('vin').classList.remove('error');
        document.getElementById('description').classList.remove('error');
    }
}
function validateForm() {
    let contact = document.getElementById('contact');
    let vin = document.getElementById('vin');
    let errorMessage = document.getElementById('error-message');
    let vinErrorMessage = document.getElementById('vin-error-message');

    if (!contact.value.startsWith('+') && !contact.value.startsWith('@')) {
        contact.classList.add('error');
        errorMessage.textContent = 'Номер телефона должен начинаться с "+", а Telegram с "@"';
    } else {
        contact.classList.remove('error');
    }

    if (vin.value.length !== 17) {
        vin.classList.add('error');
        vinErrorMessage.textContent = 'VIN номер должен состоять ровно из 17 символов';
    } else {
        vin.classList.remove('error');
        vinErrorMessage.textContent = '';
    }

    if (!errorMessage.textContent && !vinErrorMessage.textContent) {
        alert('Форма отправлена!');
        closeModal({ target: { id: 'modal' } });
    }
}


