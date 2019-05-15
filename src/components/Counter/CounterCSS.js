import React, { useState } from 'react';
import styles from './counter.module.css';

/**
 * This is the counter built with CSS modules
 */
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className={styles.counter}>
            <p className={styles.paragraph}>{count}</p>
            <button className={styles.button} onClick={increment}>
                +
            </button>
            <button className={styles.button} onClick={decrement}>
                -
            </button>
        </div>
    );
};

export default Counter;
