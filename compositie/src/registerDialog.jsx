import { useState } from "react";
import Dialog from "./Dialog";

export default function WelcomeDialog() {
    const [input, setInput] = useState('');

    return (
        <Dialog
            title="Register"
            subtitle="Registering is easy and fast."
            color="blue"
        >
            <div>
                Naam:
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    text="text"
                />
                {input.length > 0 && <button>
                    Register as {input} &raquo;
                </button>}
            </div>
        </Dialog>
    )
}