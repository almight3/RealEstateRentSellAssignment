import React,{useContext,useState,useEffect} from 'react';
import FilterProperty from '../component/FilterProperty/FilterProperty';
import SingleCard from '../component/SingleCard/SingleCard';
import {Context} from "../context/ContextProvider";
import Pagination from  "../component/common/Pagination";
import data from "../data/RealEstateRent.json"
import "./page.css"

function RentProperty() {
 const [rentProperty,setRentProperty] = useState(data) 
 const {rentState,filterState} = useContext(Context);
 const {byLocation,byPrice,byPropertyType} = filterState;
 const [page,setPage] = useState(0); 

 //paginantion
 const pageCount  = Math.ceil(rentProperty && (rentProperty.length / 6));
 const handelChange = ({selected}) =>{
    setPage(selected)
    console.log("rerender",selected)
 }

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
  //property to show per page 
  const propertyPerPage = 6;
  const pageVisited = page  * propertyPerPage;
  console.log(filterRentProperty.slice(pageVisited,pageVisited + propertyPerPage))
  let rentPropertyData = filterRentProperty.slice(pageVisited,pageVisited + propertyPerPage)
  return rentPropertyData;
}  


  return (
    <div>
         <div className="header-container">
            <h1>Search properties to rent</h1>
            <input placeholder="search by brand name"/>
         </div>
         <FilterProperty />
         <div className="property-container">
         {filterRentProperty().map((property)=>(<SingleCard property={property} />))}
         </div>
         <Pagination  pageCount={pageCount} pageChange={handelChange}/>
    </div>
  )
}

export default RentProperty;