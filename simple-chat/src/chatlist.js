import './styles/variables.css';
import './styles/global.css';
import { ChatHeader } from './components/ChatHeader/ChatHeader';
import { ChatList } from './components/ChatList/ChatList';

const chats = JSON.parse(localStorage.getItem('chats')) || [];

function saveChats() {
    localStorage.setItem('chats', JSON.stringify(chats));
}

function renderChats() {
    let app = document.getElementById('app');
    
    if (app) {
        app.innerHTML = '';
    } else {
        app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
    }

    const header = ChatHeader('Messenger');
    app.appendChild(header);

    const chatListElement = ChatList(chats);
    app.appendChild(chatListElement);

    const createChatButton = document.createElement('button');
    createChatButton.classList.add('floating-button');
    const addIcon = document.createElement('span');
    addIcon.classList.add('material-icons');
    addIcon.textContent = 'add';
    createChatButton.appendChild(addIcon);

    createChatButton.addEventListener('click', () => {
        const chatName = prompt('Введите название нового чата:');
        if (chatName) {
            const newChat = {
                id: Date.now(),
                name: chatName,
                messages: []
            };
            chats.push(newChat);
            saveChats();
            window.location.href = `index.html#chat-${newChat.id}`;
        }
    });

    app.appendChild(createChatButton);
}

renderChats();
