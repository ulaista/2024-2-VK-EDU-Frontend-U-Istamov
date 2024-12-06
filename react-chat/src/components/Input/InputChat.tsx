import styles from './InputChat.module.scss';

interface InputChatPorps {
    message: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const InputChat: React.FC<InputChatPorps> = ({ message, onChange, onKeyPress }) => {
    return(
        <input
            className={styles['form-input']}
            type="text"
            placeholder="Message"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    )
}

export default InputChat;