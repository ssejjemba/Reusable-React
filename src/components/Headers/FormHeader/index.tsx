import React from "react";
import "../Header.css";

function header(props: { title: string }) {
    return (
        <div className="formHeader">
            <p>{props.title}</p>
        </div>
    );
}

export default header;
