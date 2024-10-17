
import './chatlist.css';

const chats = [
    {
        name: "Дженнифер Эшли",
        message: "Ты куда пропал?",
        time: "15:52",
        unread: 99
    },
    {
        name: "Общество целых бокалов",
        message: "Ребят, без меня сегодня :(",
        time: "15:52",
        unread: 0
    },
    {
        name: "Антон Иванов",
        message: "Тоха, ты где?",
        time: "15:52",
        unread: 2
    }
];

const chatList = document.querySelector('.chat-list');

function renderChats() {
    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        
        chatItem.innerHTML = `
            <div class="avatar">
                <span class="material-icons">person</span>
            </div>
            <div class="chat-details">
                <div class="chat-name">${chat.name}</div>
                <div class="last-message">${chat.message}</div>
            </div>
            <div class="chat-time">${chat.time}</div>
            ${chat.unread > 0 ? `<div class="chat-unread"><span class="unread-count">${chat.unread}</span></div>` : ''}
        `;
        
        chatList.appendChild(chatItem);
    });
}

renderChats();
