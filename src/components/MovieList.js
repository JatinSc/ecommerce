import React from "react";


const MovieList = (props) => {
    const FavouriteComponent = props.FavouriteComponent
    return (
        <>
            {props.movies.map((movie , index)=>(
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie"></img>
                    <div onClick={()=>props.handelFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    {/*we are adding favourite component(function) as a props here in OVERLAY div*/}
                    <FavouriteComponent/>
                    </div>
                </div>
            ))}
        </>
    )
};

export default MovieList;

