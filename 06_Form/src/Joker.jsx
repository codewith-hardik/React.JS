import { useEffect } from "react";
import { useState } from "react";



export default function Joker(){
    let [joke,setJoke] = useState({});
    let url = "https://official-joke-api.appspot.com/random_joke"

    let getNewJoke = async ()=>{
        let respons = await fetch(url);
        let jokeRespons = await respons.json();
        setJoke({setup:jokeRespons.setup, punchline: jokeRespons.punchline})
    }

    useEffect(()=>{
        let getNewJoke = async ()=>{
            let respons = await fetch(url);
            let jokeRespons = await respons.json();
            setJoke({setup:jokeRespons.setup, punchline: jokeRespons.punchline})
        }
        getNewJoke();
    },[])

    return(
        <div>
            <h1>Joker!!!</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <br /><br />
            <button onClick={getNewJoke} >New Joke!!!</button>
        </div>
    );
}