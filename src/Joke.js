import React from "react";

const Joke = props => {
    return (
        <div>
            <h3 style={{ display: props.questions ? "block" : "none", color: !props.punchLine ? "orange" : "blue" }}>Questions: {props.questions}</h3>
            <h3 style={{ display: props.punchLine ? "block" : "none", color: !props.questions ? "red" : "green" }}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    );
};

export default Joke;