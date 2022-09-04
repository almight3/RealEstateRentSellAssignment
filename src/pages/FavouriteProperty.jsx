import React,{useContext,useState} from 'react'
import {Context} from "../context/ContextProvider";
import SingleCard from  "../component/SingleCard/SingleCard"
import Pagination from '../component/common/Pagination';
import "./page.css"
function FavouriteProperty() {
  const {rentState} = useContext(Context);
  const {favourite} = rentState;
  const [page,setPage] = useState(0);
  
  let favouriteData = favourite;
  const pageCount  = Math.ceil(favouriteData && (favouriteData.length / 6));
  const handelChange = ({selected}) =>{
    setPage(selected)
    console.log("rerender",selected)
  }
  const propertyPerPage = 6;
  const pageVisited = page  * propertyPerPage;
  console.log(favouriteData.slice(pageVisited,pageVisited + propertyPerPage))
  favouriteData = favouriteData.slice(pageVisited,pageVisited + propertyPerPage)


  return (
    <div>
      <h4>Totals Items({favourite.length})</h4>
      <div className="property-container">   
        {
          favouriteData.map((fav)=><SingleCard property={fav}/>)
        }  
    </div>
    <Pagination pageCount={pageCount} pageChange={handelChange} />
    </div>
  )
}

export default FavouriteProperty