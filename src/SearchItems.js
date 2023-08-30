import React from 'react'
import './App.css';

const SearchItems = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
           id="search"
           text="text"
           role="searchbox"
           placeholder="SearchItems"
           value={search}
           onChange={(e) => setSearch(e.target.value)}/>

    </form>
  )
}

export default SearchItems