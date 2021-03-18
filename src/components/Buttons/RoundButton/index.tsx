import React from "react";
import "../Buttons.css";

function Button(props: { onClick: () => void; label: string }) {
    return (
        <button onClick={props.onClick} className="round-button">
            {props.label}
        </button>
    );
}

export default Button;
