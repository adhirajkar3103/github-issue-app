import React from "react";

const SearchBar = () => {
    function handleSubmit(e) {
      e.preventDefault();
      console.log("You clicked submit.");
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="issueName"/>
        <button type="submit">Submit</button>
      </form>
    );
};

export default SearchBar;
