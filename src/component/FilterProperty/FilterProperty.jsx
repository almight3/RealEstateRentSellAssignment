import React,{useContext,useState} from 'react';
import "./FilterProperty.css";
import {Context} from "../../context/ContextProvider";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format,parseISO } from 'date-fns'

function FilterProperty({pageDefault}) {
  const {filterDispatch} = useContext(Context);
  const [filter,setFilter] = useState({
    location:'',
    propertyType:'',
    priceRange:'',
  })
  const [moveInDate,setMoveInDate] = useState(null)
  const currDate = new Date();
  const manimumDaysFromToday = new Date(); 
  const maximuDaysFromToday = new Date();
  maximuDaysFromToday.setDate(maximuDaysFromToday.getDate() + 180);
  
// calling filter dispatch
const handleSubmit = ()=>{
  pageDefault(0);
  filterDispatch({
    type:"FILTER_BY_LOCATION",
    payload:filter.location
  })

  filterDispatch({
    type:"FILTER_BY_PRICE",
    payload:filter.priceRange
  })
  filterDispatch({
    type:"FILTER_BY_PROPERTY",
    payload:filter.propertyType
  })
  filterDispatch({
    type:"FILTER_BY_MOVE_IN_DATE",
    payload:format(moveInDate,'MM/dd/yyyy')
  })
}

const handleClearFilter = ()=>{
   filterDispatch({
    type:"ClEAR_ALL_FILTER"
   })
   setFilter({...filter,
   location:'',
   propertyType:'',
   priceRange:''
   })
   setMoveInDate(null)
}
// console.log(format(moveInDate,'MM/dd/yyyy'))
    

  return (
    <div className="filter-container">
        <div className="filter-property">
          <label>Location</label>
          <select onClick={(e)=>{setFilter({...filter,location:e.target.value})}} >
            <option value="NY">NewYork,USA</option>
            <option value="TX">Texas,USA</option>
            <option value="CA">California,USA</option>
          </select>
        </div>
        <div>
          <DatePicker 
            selected={moveInDate==null ? currDate:moveInDate}
            onChange= {(date)=>{setMoveInDate(date)}}
            minDate={manimumDaysFromToday}
            maxDate={maximuDaysFromToday}
          />
        </div>
        <div className="filter-property">
        <label>Price</label>
        <select onClick={(e)=>{setFilter({...filter,priceRange:e.target.value})}}>
            <option>500-1500</option>
            <option>1500-3000</option>
            <option>3000-5000</option>
          </select>
        </div>
        <div className="filter-property">
        <label>Property</label>
        <select oonClick={(e)=>{setFilter({...filter,propertyType:e.target.value})}} >
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div>
        <button onClick={()=>handleSubmit()}>Search</button>
        <button onClick={()=>{handleClearFilter()}}>clear filter</button>
    </div>
  )
}

export default FilterProperty