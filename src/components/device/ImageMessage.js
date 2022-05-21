import React from "react";
import styles from "./ImageMessage.module.css";

const ImageMessage = ({ images, sentByMe }) => {
    return (
        <div className={sentByMe ? styles.MessageSentByMe : styles.message}>
            {images.map((image, index) => (
                <img src={image} alt="" key={index} className={styles.image} />
            ))}
        </div>
    );
};

export default ImageMessage;
