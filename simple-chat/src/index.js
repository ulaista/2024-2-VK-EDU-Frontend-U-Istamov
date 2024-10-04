import './index.css';
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messageList = document.querySelector('.message-list');
const sendButtonIcon = document.querySelector('.send-button span');
let messages = JSON.parse(localStorage.getItem('messages')) || [];

window.addEventListener('load', loadMessages);

form.addEventListener('submit', handleSubmit);
input.addEventListener('input', toggleSendButton);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
    event.preventDefault();
    
    const messageText = input.value.trim();
    if (messageText) {
        const message = {
            text: messageText,
            send: 'User',
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        };
        
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        
        displayMessage(message);
        input.value = '';
        toggleSendButton();
        scrollToBottom();
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        form.dispatchEvent(new Event('submit'));
    }
}

function loadMessages() {
    messages.forEach(displayMessage);
    scrollToBottom();
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-from-user');

    const messageText = document.createElement('p');
    messageText.textContent = message.text;

    const messageTime = document.createElement('small');
    messageTime.classList.add('small-time-message');
    messageTime.textContent = message.time;
    
    const messageCheck = document.createElement('span');
    messageCheck.classList.add('material-icons');
    messageCheck.classList.add('check');
    messageCheck.textContent = 'check';

    messageElement.appendChild(messageText);
    messageElement.appendChild(messageTime);
    messageElement.appendChild(messageCheck);

    messageList.appendChild(messageElement);
}

function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
}

function toggleSendButton() {
   input.value.trim() ? sendButtonIcon.textContent = 'send' : sendButtonIcon.textContent = 'attach_file';
}