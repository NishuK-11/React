import React from 'react';
// Importing the CSS module
import styles from '../Destructuring/Part.module.css';

const Tailwind2 = (props) => {
    const { name, age, greeting } = props;
    
    const btn_style = {
        padding: "10px",
        margin: "10px",
        backgroundColor: "green",
        color: "white"
    };

    const bg_color = {
        backgroundColor: "yellow"
    };

    const bg2_color = {
        backgroundColor: "red"
    };

    // Dynamically determining the styles based on age
    const getAge = age > 20 ? styles.super_hit : styles.average;
    const getFont = age > 20 ? styles.nameFont1 : styles.nameFont2;
    const getColor = age > 20 ? styles.nameFontColor1 : styles.nameFontColor2;

    return (
        <div>
            {/* Applying dynamic class names using the CSS module */}
            <h1 className={`${getFont} ${getColor}`}>{name}</h1>
            <h1>
                Age: <span className={`${styles.timepass} ${getAge}`}>{age}</span>
            </h1>
            {/* <div style={{ margin: "6rem 0" }}>{greeting}</div> */}
            {/* Render the children passed to Tailwind2 */}
            <div className={styles["greeting-Font"]}>{greeting}</div>
            <div style={{ margin: "6rem 0" }}>{props.children}</div>
            <button style={btn_style}>Contact</button>
            <h1 class="text-blue-600">Nishu Kumari</h1>
        </div>
    );
};

export default Tailwind2;