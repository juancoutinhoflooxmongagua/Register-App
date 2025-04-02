import { useState } from "react";
import Layout from "@/components/Layout";

export default function State() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    return (
        <div>
            <span>{number}</span>
            <br />
            <button onClick={increment}>Incrementar</button>
            <Layout />
        </div>
    );
}
