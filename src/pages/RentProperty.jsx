import React,{useContext,useState} from 'react';
import FilterProperty from '../component/FilterProperty/FilterProperty';
import SingleCard from '../component/SingleCard/SingleCard';
import {Context} from "../context/ContextProvider";
import Pagination from  "../component/common/Pagination";
import data from "../data/RealEstateRent.json"
import SearchFilter from '../component/FilterProperty/SearchFilter';
import "./page.css"

function RentProperty() {
 const [rentProperty] = useState(data) 
 const {filterState} = useContext(Context);
 const {byLocation,byPrice,byPropertyType,byMoveInDate,bySearchQuery} = filterState;
 const [page,setPage] = useState(0); 

 

//filtering rent property 
function filterRentProperty(){
  let filterRentProperty = rentProperty;
  
  if(byLocation){  
  filterRentProperty = filterRentProperty.filter((property)=>property.address.state_code===byLocation)
  }
  
  
  if(byPrice){
  let sortByPrice = byPrice;
  sortByPrice = sortByPrice.split('-');
  filterRentProperty = filterRentProperty.filter((f)=>(f.price>=parseInt(sortByPrice[0]) && f.price <= parseInt(sortByPrice[1])))
  .sort((a,b)=>(a.price -b.price));
  }
  
  if(byPropertyType){
  filterRentProperty = filterRentProperty.filter((property)=>property.prop_type===byPropertyType);  
  }
  
  
  if(byMoveInDate){
  filterRentProperty = filterRentProperty.filter((property)=>{
    let date1 = new Date(property.move_in_date);
    let date2 = new Date(byMoveInDate);
    console.log("date1",date1);
    console.log("date2",date2)
    if(date1 >= date2){
      return true;
    }
    return false;
  })
  }
  
  if(bySearchQuery){
  filterRentProperty = filterRentProperty.filter((property)=>property.name.toLowerCase().includes(bySearchQuery.toLowerCase()))  

  }

  
  
  console.log(filterRentProperty)
  return filterRentProperty;
}  
//paginantion
const propertyPerPage = 6;  
const pageVisited = page  * propertyPerPage;
let rentPropertyData = filterRentProperty();
const pageCount  = Math.ceil(rentPropertyData && (rentPropertyData.length / 6));
const handelChange = ({selected}) =>{
   setPage(selected)
   console.log("rerender",selected)
}

  return (
    <div>
         <SearchFilter pageDefault={setPage} />
         <FilterProperty pageDefault={setPage}/>
         <div className="property-container">
         {filterRentProperty().length===0 ?<div><p className="property-notfound">Property you looking for is not found</p></div> : filterRentProperty().slice(pageVisited,pageVisited+propertyPerPage).map((property)=>(<SingleCard  key={property.property_id} property={property} />))}
         </div>
         <Pagination  pageCount={pageCount} pageChange={handelChange}/>
    </div>
  )
}

export default RentProperty;