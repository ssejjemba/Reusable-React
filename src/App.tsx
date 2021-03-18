import React, { useState } from "react";
import "./App.css";
import Components from "./components";

function App() {
    const [value, setValue] = useState("");
    return (
        <div className="App">
            <Components.Inputs.ValidationInput
                value={value}
                onChange={setValue}
                error=""
                label="Email"
                type="email"
            />
        </div>
    );
}

export default App;
