import React, { useState } from "react";
import './component.css';


function Reg() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const handleReg = () => {
        setisModalOpen(true);
    };
    const closeModal = () => {
        setisModalOpen(false);
    };
    return(
        <div className="reg">
            <button onClick={handleReg}>Registr</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>Close</span>
                        <h2>Registratsiya</h2>
                        
                    </div>
                    
                </div>
            )}
        </div>
    );
}


export default Reg;