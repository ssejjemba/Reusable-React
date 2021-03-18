import React from "react";
import "./inputs.css";

const input = (props: {
    value: string;
    onChange: (value: string) => void;
    error: string | null;
    type?: string;
    placeholder?: string;
    label: string;
    id: string;
}) => {
    return (
        <div className="input-group">
            <input
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className="form-control"
                type={props.type || "text"}
                name={props.id}
                id={props.id}
                required
                placeholder={props.placeholder || ""}
            />
            <label htmlFor={props.id}>{props.label}</label>
            {props.error ? <div className="req-mark">!</div> : null}
        </div>
    );
};

export default input;
