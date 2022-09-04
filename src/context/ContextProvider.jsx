import React,{useReducer} from 'react';
import data from "../data/RealEstateRent"
import { rentPropertyData,filterRentProperty } from '../reducer/RentPropertyReducer';
export const Context = React.createContext(); 
function ContextProvider({children}) {
  console.log(data[0].address.neighborhood_name);  
  const [rentState,rentDispatch] = useReducer(rentPropertyData,{
   favourite:[]
  })
  console.log(rentState.favourite)
  const [filterState,filterDispatch] = useReducer(filterRentProperty,{
    byLocation:"",
    byPrice:"",
    byPropertyType:"",
    byMoveInDate:"",
    bySearchQueary:""
  })
  console.log(filterState)


  return (
    <Context.Provider value={{rentState,rentDispatch,filterState,filterDispatch}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider