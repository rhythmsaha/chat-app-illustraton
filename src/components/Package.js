import React from "react";
import styles from "./Package.module.css";

const Package = ({ sentByMe, price, text }) => {
    return (
        <div className={styles.package}>
            <div className={styles.radio} />
            <p className={styles.text}>{text}</p>
            <p className={styles.price}>{price}</p>
        </div>
    );
};

export default Package;
