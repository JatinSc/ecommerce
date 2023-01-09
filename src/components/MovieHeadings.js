import React from "react";

const MovieHeadings = (props) => {
    return (
        <div className="col">
            <h3><u>{props.author}</u></h3>
            <br/>
            <br/>
            <h1>{props.heading}</h1>
        </div>
    )
}
export default MovieHeadings;