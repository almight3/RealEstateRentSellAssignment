import React,{useContext} from 'react'
import "./FilterProperty.css"
import {Context} from "../../context/ContextProvider"
function SearchFilter({pageDefault}) {
  const {filterDispatch} = useContext(Context)  
  const handelChange = (e)=>{
    pageDefault(0);
    filterDispatch({
        type:"FILTER_BY_SEARCH_QUERY",
        payload:e.target.value
    })

  }
  return (
    <div className="search-container">
    <h1>Search properties to rent</h1>
    <input onChange={(e)=>{handelChange(e)}} placeholder="search by brand name"/>
    </div>
  )
}

export default SearchFilter