import React from "react";
import styles from "./InputMessage.module.css";
import { AiOutlineRight } from "react-icons/ai";

const InputMessage = () => {
    return (
        <div className={styles.Container}>
            <input
                type="text"
                placeholder="Type a message..."
                className={styles.input}
                readOnly
            />
            <button className={styles.sendButton}>
                <AiOutlineRight className={styles.rightIcon} />
            </button>
        </div>
    );
};

export default InputMessage;
