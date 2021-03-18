import React from "react";
import "./inputs.css";

const input = (props: {
    value: string;
    onChange: (value: string) => void;
    error: string | null;
    type?: string;
    placeholder?: string;
    label: string;
}) => {
    return (
        <div className="input-group">
            <input
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className="form-control"
                type={props.type || "text"}
                name="text-1542372332072"
                id="text-1542372332072"
                required
                placeholder={props.placeholder || ""}
            />
            <label htmlFor="text-1542372332072">{props.label}</label>
            <div className="req-mark">!</div>
        </div>
    );
};

export default input;
