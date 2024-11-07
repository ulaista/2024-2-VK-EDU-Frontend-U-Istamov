import './ChatHeader.css';

export function ChatHeader(title, avatar = 'face') {
    const header = document.createElement('header');
    header.classList.add('middle-header');

    const contactChatWrapper = document.createElement('div');
    contactChatWrapper.classList.add('contact-chat-wrapper');

    const backButton = document.createElement('button');
    backButton.classList.add('header-tool', 'back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'chatlist.html';
    });
    const backIcon = document.createElement('span');
    backIcon.classList.add('material-icons');
    backIcon.textContent = 'arrow_back';
    backButton.appendChild(backIcon);

    const avatarElem = document.createElement('div');
    avatarElem.classList.add('avatar');
    const avatarIcon = document.createElement('span');
    avatarIcon.classList.add('material-icons');
    avatarIcon.textContent = avatar;
    avatarElem.appendChild(avatarIcon);

    const infoChatContact = document.createElement('div');
    infoChatContact.classList.add('info-chat-contact');
    infoChatContact.textContent = title;

    contactChatWrapper.appendChild(backButton);
    contactChatWrapper.appendChild(avatarElem);
    contactChatWrapper.appendChild(infoChatContact);

    header.appendChild(contactChatWrapper);

    return header;
}
