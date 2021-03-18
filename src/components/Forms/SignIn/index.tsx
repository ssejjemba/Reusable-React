import React, { useState } from "react";
import "../Form.css";
import Inputs from "../../Inputs";
import Buttons from "../../Buttons";
import Headers from "../../Headers";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(true);
    return (
        <div className="Form">
            <Headers.FormHeader title="Dally Technologies" />
            <Inputs.ValidationInput
                value={email}
                onChange={setEmail}
                error=""
                label="Email"
                type="email"
                id="signin-email"
            />
            <Inputs.ValidationInput
                value={password}
                onChange={setPassword}
                error=""
                label="Password"
                type="password"
                id="signin-password"
            />
            <Inputs.CheckBox
                label="Remember me"
                checked={check}
                onCheck={() => setCheck(!check)}
                id="checkbox-01"
            />
            <Buttons.RoundButton
                onClick={() => console.log({ email, password })}
                label="Submit"
            />
        </div>
    );
}

export default SignInForm;
