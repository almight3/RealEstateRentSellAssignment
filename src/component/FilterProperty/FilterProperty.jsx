import React,{useContext,useState} from 'react';
import "./FilterProperty.css";
import {Context} from "../../context/ContextProvider";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import {BsFillCalendarDateFill} from "react-icons/bs"

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
    
  return (
    <div>
      <div className="clear-filter"><li onClick={()=>{handleClearFilter()}}>clear filter</li></div>
      <div className="filter-container">
        <div className="filter-property">
          <label className="filter-label">Location</label>
          <select className="filter-select"  onClick={(e)=>{setFilter({...filter,location:e.target.value})}} >
            <option value="NY">NewYork,USA</option>
            <option value="TX">Texas,USA</option>
            <option value="CA">California,USA</option>
          </select>
        </div>
        <div>
        <label className="filter-label">When</label>
          <DatePicker 
            selected={moveInDate==null ? currDate:moveInDate}
            onChange= {(date)=>{setMoveInDate(date)}}
            minDate={manimumDaysFromToday}
            maxDate={maximuDaysFromToday}
            render={<BsFillCalendarDateFill />}
          />
        </div>
        <div className="filter-property">
        <label className="filter-label">Price</label>
        <select className="filter-select"  onClick={(e)=>{setFilter({...filter,priceRange:e.target.value})}}>
            <option value="500-1500">$500-$1500</option>
            <option value="1500-3000">$1500-$3000</option>
            <option value="3000-5000">$3000-$5000</option>
          </select>
        </div>
        <div className="filter-property">
        <label className="filter-label">Property</label>
        <select className="filter-select" onClick={(e)=>{setFilter({...filter,propertyType:e.target.value})}} >
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div>
        <div>
        <button className="filter-button" onClick={()=>handleSubmit()}>Search</button>
        </div>
    </div>
    </div>
  )
}

export default FilterProperty