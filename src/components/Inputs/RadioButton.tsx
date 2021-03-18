import React from "react";
import "./inputs.css";

const input = (props: {
    checked: boolean;
    onCheck: () => void;
    label: string;
    id: string;
}) => {
    return (
        <>
            <input className="radio-input" id={props.id} type="radio" />
            <label htmlFor={props.id}>{props.label}</label>
        </>
    );
};

export default input;
