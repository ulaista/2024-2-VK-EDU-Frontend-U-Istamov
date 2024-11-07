import './index.css';

const chats = JSON.parse(localStorage.getItem('chats')) || [];

const chatId = parseInt(window.location.hash.replace('#chat-', ''));
const chat = chats.find(c => c.id === chatId);

if (!chat) {
    document.body.innerHTML = '<p>Чат не найден. <a href="chatlist.html">Вернуться к списку чатов</a></p>';
} else {
    document.querySelector('.info-chat-contact').textContent = chat.name;
    
    const avatarElement = document.querySelector('.avatar .material-icons');
    avatarElement.textContent = chat.avatar || 'face';

    const form = document.querySelector('form');
    const input = document.querySelector('.form-input');
    const messageList = document.querySelector('.message-list');
    const sendButtonIcon = document.querySelector('.send-button span');

    function loadMessages() {
        messageList.innerHTML = '';
        chat.messages.forEach(displayMessage);
        scrollToBottom();
    }

    form.addEventListener('submit', handleSubmit);
    input.addEventListener('input', toggleSendButton);
    form.addEventListener('keypress', handleKeyPress);

    function handleSubmit(event) {
        event.preventDefault();

        const messageText = input.value.trim();
        if (messageText) {
            const message = {
                text: messageText,
                sender: 'User',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            chat.messages.push(message);
            saveChats();

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

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message-from-user');

        const messageText = document.createElement('p');
        messageText.textContent = message.text;

        const messageTime = document.createElement('small');
        messageTime.classList.add('small-time-message');
        messageTime.textContent = message.time;

        const messageCheck = document.createElement('span');
        messageCheck.classList.add('material-icons', 'check');
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
    
    loadMessages();
}

function saveChats() {
    localStorage.setItem('chats', JSON.stringify(chats));
}
