import './ChatInput.css';

export function ChatInput(onMessageSubmit) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const input = document.createElement('input');
    input.classList.add('form-input');
    input.setAttribute('placeholder', 'Message');
    input.setAttribute('type', 'text');

    const sendButton = document.createElement('button');
    sendButton.classList.add('send-button', 'material-icons');
    sendButton.textContent = 'send';

    inputContainer.appendChild(input);
    inputContainer.appendChild(sendButton);

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.trim() !== '') {
            onMessageSubmit(input.value.trim());
            input.value = '';
        }
    });

    return inputContainer;
}
