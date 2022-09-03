import React,{useContext} from 'react'
import {Context} from "../context/ContextProvider";
import SingleCard from  "../component/SingleCard/SingleCard"
import "./page.css"
function FavouriteProperty() {
  const {rentState} = useContext(Context);
  const {favourite} = rentState;
  return (
    <div>
      <h4>Totals Items({favourite.length})</h4>
      <div className="property-container">   
        {
          favourite.map((fav)=><SingleCard property={fav}/>)
        }  
    </div>
    </div>
  )
}

export default FavouriteProperty