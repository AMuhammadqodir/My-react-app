import React from "react";

function UserCard({name,age,profession}) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Sinnu sol: {age}</p>
            <p>Kasb: {profession}</p>
        </div>
    );
}

export default UserCard;