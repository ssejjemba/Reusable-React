import React from "react";
import "./inputs.css";

const input = (props: {
    checked: boolean;
    onCheck: () => void;
    label: string;
    id: string;
}) => {
    return (
        <label className="checkbox-label" htmlFor={props.id}>
            <input
                className="checkbox-input"
                id={props.id}
                type="checkbox"
                checked={props.checked}
                onChange={props.onCheck}
            />
            <span className="toggle-span"></span>
            <span className="toggle-text">{props.label}</span>
        </label>
    );
};

export default input;
