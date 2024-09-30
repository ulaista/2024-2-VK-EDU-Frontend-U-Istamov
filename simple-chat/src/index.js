import './index.css';
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messageList = document.querySelector('.message-list');
let messages = JSON.parse(localStorage.getItem('messages')) || [];

window.addEventListener('load', loadMessages);

form.addEventListener('submit', handleSubmit);

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
    messageElement.innerHTML = `${message.text} <small>${message.time}</small>`;
    
    messageList.appendChild(messageElement);
}

function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
}
