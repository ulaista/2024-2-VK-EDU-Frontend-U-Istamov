import './styles/variables.css';
import './styles/global.css';
import { ChatHeader } from './components/ChatHeader/ChatHeader';
import { ChatInput } from './components/ChatInput/ChatInput';
import { ChatMessages } from './components/ChatMessages/ChatMessages';

const chats = JSON.parse(localStorage.getItem('chats')) || [];
const chatId = parseInt(window.location.hash.replace('#chat-', ''));
const chat = chats.find(c => c.id === chatId);

if (!chat) {
    document.body.innerHTML = '<p>Чат не найден. <a href="chatlist.html">Вернуться к списку чатов</a></p>';
} else {
    let app = document.getElementById('app');
    
    if (app) {
        app.innerHTML = '';
    } else {
        app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
    }

    const header = ChatHeader(chat.name, chat.avatar);
    app.appendChild(header);

    const messageList = ChatMessages(chat.messages);
    app.appendChild(messageList);

    const input = ChatInput((messageText) => {
        const message = {
            text: messageText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        chat.messages.push(message);
        localStorage.setItem('chats', JSON.stringify(chats));

        const newMessageElement = ChatMessages([message]);
        newMessageElement.classList.add('new');

        messageList.appendChild(ChatMessages([message]));
    });
    app.appendChild(input);
}
