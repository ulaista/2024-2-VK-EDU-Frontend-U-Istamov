import AddIcon from "@mui/icons-material/Add";
import styles from './AddButton.module.scss';


interface AddButtonProps {
    onClick: () => void;
}


const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <div className={styles["add-chat-button"]} onClick={ onClick }>
            <AddIcon />
        </div>
    );
};

export default AddButton;
