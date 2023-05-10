import React from "react";
import Joke from "./Joke";
import JokeData from "./JokeData";

const jokes = JokeData.map(joke => {
    return <Joke questions={joke.questions} punchLine={joke.punchLine} key={joke.id} /> 
})

const App = () => {
    return (
        <div>
            {jokes}
        </div>
    );
}; 

export default App;