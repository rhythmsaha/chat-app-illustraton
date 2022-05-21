import React from "react";
import Mobile from "./components/device/Mobile";
import styles from "./App.module.css";
import Content from "./components/Content";

const App = () => {
    return (
        <main className={styles.main}>
            <Mobile />
            <Content />
        </main>
    );
};

export default App;
