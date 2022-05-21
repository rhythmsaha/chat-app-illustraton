import React from "react";
import styles from "./Message.module.css";

const Message = ({ sentByMe, message }) => {
    return (
        <div className={sentByMe ? styles.MessageSentByMe : styles.Message}>
            {message}
        </div>
    );
};

export default Message;
