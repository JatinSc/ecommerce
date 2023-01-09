import React from "react";



const SearchBar = (props) =>{
    return (
        <div className="col col-sm-4">
           <input className="form-control" 
           value={props.value} 
           onChange={(e)=> props.setSearchValue(e.target.value)}
           placeholder="top 10 movies ..."></input>
        </div>
    )
}

export default SearchBar;