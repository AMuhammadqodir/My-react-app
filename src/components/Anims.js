import React, { useState } from "react";
import './Anim.css';

const Anims = () => {
    const [isDarkMode, setisDarkMode] = useState(false);

    const [isVisible, setisVisible] = useState(false);

    const toggleDarkMode = () => {
        setisDarkMode(!isDarkMode);
    };

    const toggleContent = () => {
        setisVisible(!isVisible);
    };
    return (
        <div className={isDarkMode ? 'dark-mode':'light-mode'}>
            <header>
                <h1>Light/Dark and animation</h1>
                <button onClick={toggleDarkMode}>{isDarkMode ? 'Light':'Dark'}</button>
                <button onClick={toggleContent}>{isVisible ? 'Content OFF':'Content ON'}</button>
            </header>
            <div className={`content ${isVisible ? 'visible':'hidden'}`}>
                <p>This is content</p>
                <p>Lorem ipsum duavfjivun  dusihfa nghdv asdyfgvbhadf sdykfgvadsvk dshagfachbgcas sdayugfcasdcgeakc
                    ascgfbuyacgfayecfgkasevf
                    avruvgwegucyaewguybcga euawgbcyegcbaye cyabrgcyaksfhsdjgcfyegcbyc gcyegfdhgfcg khdrsghrsybfhjdf bfhdsuifbdshbvjdfgberhjc sdufvbjh asdb dshagfachbgcasas dhf gahdsbf
                    jdsfkuahdbcfhj
                </p>
            </div>
        </div>
    );
};

export default Anims;