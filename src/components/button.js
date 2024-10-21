import React, {useState} from "react";
import './component.css';


function Button() {
    const [count, setCount] = useState(0);

    const checkbtn1 = () => {
        setCount(prevCount => prevCount + 1);
    };

    const checkbtn2 = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div className="btn-Check">
            <h1>Count: {count}</h1>
            <button onClick={checkbtn1}>Увеличить</button>            
            <button onClick={checkbtn2}>Уменишить</button>
            
        </div>
    );
}

export default Button;