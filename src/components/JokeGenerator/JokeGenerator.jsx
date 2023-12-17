import { useEffect, useState } from "react"
import "./JokeGenerator.css"
import jokeimg from "./assest/jokeimg.jpeg";

const JokeGenerator = () => {

    const [joke, setJoke] = useState("")

    useEffect(() => {
        fetchJoke()
    }, [])

    const fetchJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const jsonfmt = await response.json()
        setJoke(jsonfmt.value)
    }

    const newJoke = () => {
        fetchJoke()
    }
    
    return (
        <div className="container">
            <p className="title">Joke Generator</p>
            <img src={jokeimg} alt="It's a Joke" className="jokeimg" />
            <p className="joke">{joke}</p>
            <button className="jokebtn" onClick={newJoke}>Get Joke</button>
        </div>
    );
}

export default JokeGenerator;