import './ChatMessages.css';

export function ChatMessages(messages) {
    const messageList = document.createElement('div');
    messageList.classList.add('message-list');

    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.textContent = message.text;
        messageList.appendChild(messageItem);
    });

    return messageList;
}
