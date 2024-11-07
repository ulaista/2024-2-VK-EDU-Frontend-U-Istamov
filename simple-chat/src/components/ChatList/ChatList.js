import './ChatList.css';

export function ChatList(chats) {
    const chatListElement = document.createElement('div');
    chatListElement.classList.add('chat-list');

    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        const avatarIcon = document.createElement('span');
        avatarIcon.classList.add('material-icons');
        avatarIcon.textContent = 'person';
        avatar.appendChild(avatarIcon);

        const chatDetails = document.createElement('div');
        chatDetails.classList.add('chat-details');

        const chatName = document.createElement('div');
        chatName.classList.add('chat-name');
        chatName.textContent = chat.name;

        const lastMessage = document.createElement('div');
        lastMessage.classList.add('last-message');
        lastMessage.textContent = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'Нет сообщений';

        chatDetails.appendChild(chatName);
        chatDetails.appendChild(lastMessage);

        const chatTime = document.createElement('div');
        chatTime.classList.add('chat-time');
        chatTime.textContent = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time : '';

        chatItem.appendChild(avatar);
        chatItem.appendChild(chatDetails);
        chatItem.appendChild(chatTime);

        chatItem.addEventListener('click', () => {
            window.location.href = `index.html#chat-${chat.id}`;
        });

        chatListElement.appendChild(chatItem);
    });

    return chatListElement;
}
