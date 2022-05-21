import React from "react";
import Message from "./Message";
import styles from "./ChatBox.module.css";
import ImageMessage from "./ImageMessage";
import Package from "./Package";
import InputMessage from "./InputMessage";

const ChatBox = () => {
    return (
        <div className={styles.chats}>
            <Message message="That sounds great. I'd be happy to discuss more." />
            <Message message="Cold you send over some pictures of your dog, please?." />

            <ImageMessage
                sentByMe
                images={[
                    "/images/dog-image-1.jpg",
                    "/images/dog-image-2.jpg",
                    "/images/dog-image-3.jpg",
                ]}
            />

            <Message
                sentByMe
                message="Here are a few pictures. She's a happy girl!"
            />
            <Message sentByMe message="Can you make it?" />
            <Message message="She looks so happy! The time we discussed works. How long shall I take her out for?" />

            <Package price="$29" text="30 minute walk" />
            <Package price="$49" text="1 hour walk" />

            <InputMessage />
        </div>
    );
};

export default ChatBox;
