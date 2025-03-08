import React from 'react'

import styles from '../Destructuring/Part.module.css';
import styled from 'styled-components'

const ButtonThapa = styled.button`
    padding: 10px;
    margin: 10px;
    background-color:${(props) => props.age > 20 ? "#ff0000" : "#00ff00"};
    color: white;
`;

const Age = styled.h3`
    font-size:1.6rem;
    color:red;
    text-transform:capitalize;
    `;

const Lec21onwards = (props) => {
    const { name, age, greeting } = props;
    
    // const btn_style = {
       
    // };

    // const bg_color = {
    //     backgroundColor: "yellow"
    // };

    // const bg2_color = {
    //     backgroundColor: "red"
    // };

    // // Dynamically determining the styles based on age
    // const getAge = age > 20 ? styles.super_hit : styles.average;
    // const getFont = age > 20 ? styles.nameFont1 : styles.nameFont2;
    // const getColor = age > 20 ? styles.nameFontColor1 : styles.nameFontColor2;

    // return (
    //     <div>
    //         {/* Applying dynamic class names using the CSS module */}
    //         <h1 className={`${getFont} ${getColor}`}>{name}</h1>
    //         <h1>
    //             Age: <span className={`${styles.timepass} ${getAge}`}>{age}</span>
    //         </h1>
    //         {/* <div style={{ margin: "6rem 0" }}>{greeting}</div> */}
    //         {/* Render the children passed to Part2 */}
    //         <div className={styles["greeting-Font"]}>{greeting}</div>
    //         <div style={{ margin: "6rem 0" }}>{props.children}</div>
    //         {/* <button style={btn_style}>Contact</button> */}
    //         <ButtonThapa>{age}</ButtonThapa>
    //     </div>
    // );

    return (
        <div>
            <h1>{name}</h1>
            <h1>
                Age: <span>{age}</span>
            </h1>
            <div className='text-3xl font-bold underline' >{greeting}</div>
            Age: <Age>{age>20?"pink":"brown"}</Age>
            <div style={{ margin: "6rem 0" }}>{props.children}</div>

            {/* Dynamically passing age prop to change button color */}
            <ButtonThapa age={age}>Contact</ButtonThapa>
        </div>
    );
};

export default Lec21onwards;
