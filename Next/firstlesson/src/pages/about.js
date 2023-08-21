import { useState } from "react";
import Cards from "../components/Cards";


export default function About() {

    const [count, setCount] = useState(0)

    return (
        <>

            <h1>{count}</h1>

            <button onClick={() => setCount( prev => prev + 1 )}>Artir</button>


            <Cards />
        </>
    )
}