import {useState} from "react"
export default function Integration() {
    const [client, setClient] = useState({})

    function obterCliente() {
        fetch('http://localhost:3000/api/clients')
            .then(resp => resp.json())
            .then(dados => setClient(dados))
    }

    return (
        <div>
            <ul>
                <li>Nome: {client.name}</li>
            </ul>

            <button onClick={obterCliente}>Obter dados</button>
        </div>
    )
}