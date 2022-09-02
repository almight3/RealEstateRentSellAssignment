import React,{useReducer} from 'react';
import data from "../data/RealEstateRent"
import { rentPropertyData,filterRentProperty } from '../reducer/RentPropertyReducer';
export const Context = React.createContext(); 
function ContextProvider({children}) {
  console.log(data);  
  const [rentState,rentDispatch] = useReducer(rentPropertyData,{
   rentProperty:data,
   favourite:[]
  })
  const [filterState,filterDispatch] = useReducer(filterRentProperty,{
    byLocation:"",
    byPrice:"",
    byPropertyType:"",
    byMoveInDate:"",
    bySearchQueary:""
  })

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider