import React,{useContext} from 'react'
import {BsSuitHeart,BsSuitHeartFill} from "react-icons/bs"
import {BiBath,BiBed} from "react-icons/bi"
import "./SingleCard.css"
import {Context} from "../../context/ContextProvider"
import TotalArea from "../../Assets/totalarea.png"

function SingleCard({property}){
 const {rentState,rentDispatch} = useContext(Context);
 const {favourite} = rentState;
  return (
    <div className="single-card-container">
        <img className="single-card-container-img" alt="rent property image" src={property.image}/>
        <span className="card-items">
            <span className="cart-span"><p>${property.hasOwnProperty("price")?(property.price):""}<small>/months</small></p></span>
            <span className="cart-span cart-icon">{favourite.some(f=>f.property_id==property.property_id) ? <BsSuitHeartFill onClick={()=>{
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
        <span className="title">{property.address.neighborhood_name}</span>
        
        <span className="address">{property.address.line},{property.address.city},{property.address.state_code}</span>
        <span className="property-details">
            <li><BiBed /> <small>{property.hasOwnProperty("beds")?(`${property.beds}Beds`):""}</small></li>
            <li><BiBath /> <small >{property.hasOwnProperty("baths_full")?(`${property.baths_full}Bathroom`):""}</small></li>
            <img className="property-details-img" src={TotalArea} alt ="total area sqft" />
             <li><span></span><small>{property.hasOwnProperty("building_size") ? (`${property.building_size.size}sqft`):""}</small></li>
        </span>
    </div>
  )
}

export default SingleCard