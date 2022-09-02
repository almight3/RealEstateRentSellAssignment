import React from 'react'
import "./FilterProperty.css"
function FilterProperty() {
  return (
    <div className="filter-container">
        <div className="filter-property">
          <label>Location</label>
          <select>
            <option>NewYork,USA</option>
            <option>Texas,USA</option>
            <option>California,USA</option>
          </select>
        </div>
        <div className="filter-property">
        <label>Price</label>
        <select>
            <option>500-1500</option>
            <option>1500-3000</option>
            <option>3000-5000</option>
          </select>
        </div>
        <div className="filter-property">
        <label>Property</label>
        <select>
            <option>House</option>
            <option>Apartment</option>
            <option>Condos</option>
          </select>
        </div>
       
    </div>
  )
}

export default FilterProperty