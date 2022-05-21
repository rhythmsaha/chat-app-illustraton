import React from "react";
import styles from "./mobile.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { IoChevronBackSharp } from "react-icons/io5";
import ChatBox from "./ChatBox";

const Mobile = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.notch} />
                <div className={styles.AppHeader}>
                    <IoChevronBackSharp className={styles.backIcon} />

                    <div className={styles.userInfo}>
                        <img
                            src="/images/avatar.jpg"
                            alt="avatar"
                            className={styles.avatar}
                        />
                        <div className={styles.info}>
                            <p className={styles.username}>Samuel Green</p>
                            <p>Available to Work</p>
                        </div>
                    </div>

                    <HiDotsVertical className={styles.MenuIcon} />
                </div>
            </div>

            <div className={styles.appBody}>
                <ChatBox />
            </div>
        </div>
    );
};

export default Mobile;
