import React,{useContext} from 'react'
import {BsSuitHeart,BsSuitHeartFill} from "react-icons/bs"
import {BiBath,BiBed} from "react-icons/bi"
import "./SingleCard.css"
import {Context} from "../../context/ContextProvider"
function SingleCard({property}){
 const {rentState,rentDispatch} = useContext(Context);
 const {favourite} = rentState;
  return (
    <div className="single-card-container">
        <img alt="rent property image" src={property.image}/>
        <span className="card-items">
            <span>${property.hasOwnProperty("price")?(property.price):""}/months</span>
            <span>{favourite.some(f=>f.property_id==property.property_id) ? <BsSuitHeartFill onClick={()=>{
              rentDispatch({
                type:"REMOVE_FROM_FAVOURITE",
                payload:{
                  id:property.property_id,
                }

              })
            }}/> : <BsSuitHeart onClick={()=>{
              rentDispatch({
                type:"ADD_TO_FAVOURITE",
                payload:property
              })
            }} /> }</span>
        </span>
        <span>{property.address.neighborhood_name}</span>
        <span>{property.address.line},{property.address.city},{property.address.state_code}</span>
        <span className="card-items">
            <li><BiBed /> {property.hasOwnProperty("beds")?(property.beds):""}</li>
            <li><BiBath /> {property.hasOwnProperty("baths_full")?(property.baths_full):""}</li>
            <li>{property.hasOwnProperty("building_size") ? property.building_size.size:""}</li>
        </span>
    </div>
  )
}

export default SingleCard