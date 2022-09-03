import React,{useContext} from 'react';
import FilterProperty from '../component/FilterProperty/FilterProperty';
import SingleCard from '../component/SingleCard/SingleCard';
import {Context} from "../context/ContextProvider";
import "./page.css"
function RentProperty() {
 const {rentState,filterState} = useContext(Context);
 const {rentProperty} = rentState;
 const {byLocation,byPrice,byPropertyType} = filterState; 
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
  return filterRentProperty;
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
    </div>
  )
}

export default RentProperty