import React, { useState } from "react";
import './component.css';

function Content() {
    const [text, setText] = useState('Matni avvala');
    const changeText = () => { 
        setText("Matn digar");
    };
    return (
        <div className="content-app">
            <p>Dar injo oidi React kontentho nishon doda shudaast. Har yak kontent dar barnomai React az nav istifoda burdan mumkin ast.</p>

            <h1>{text}</h1>
            <button onClick={changeText} className="btn">ChangeText</button>
        </div>
    );
}

export default Content;