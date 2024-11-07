import './chatlist.css';

const chats = JSON.parse(localStorage.getItem('chats')) || [];

function saveChats() {
    localStorage.setItem('chats', JSON.stringify(chats));
}
const chatListElement = document.querySelector('.chat-list');

function renderChats() {
    chatListElement.innerHTML = '';

    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');

        const lastMessage = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'Нет сообщений';

        chatItem.innerHTML = `
            <div class="avatar">
                <span class="material-icons">person</span>
            </div>
            <div class="chat-details">
                <div class="chat-name">${chat.name}</div>
                <div class="last-message">${lastMessage}</div>
            </div>
            <div class="chat-time">${chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time : ''}</div>
        `;

        chatItem.addEventListener('click', () => {
            window.location.href = `index.html#chat-${chat.id}`;
        });

        chatListElement.appendChild(chatItem);
    });
}

function createNewChat() {
    // console.log('createNewChat вызвана');
    const chatName = prompt('Введите название нового чата:');
    if (chatName) {
        const newChat = {
            id: Date.now(),
            name: chatName,
            messages: []
        };
        chats.push(newChat);
        saveChats();
        renderChats();
    }
}

const createChatButton = document.querySelector('.floating-button');

if (!createChatButton.dataset.handlerAttached) {
    // console.log('Добавление обработчика для создания нового чата');
    createChatButton.addEventListener('click', createNewChat);
    createChatButton.dataset.handlerAttached = 'true';
}

renderChats();
