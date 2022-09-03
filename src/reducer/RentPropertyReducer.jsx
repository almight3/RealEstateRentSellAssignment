export const rentPropertyData = (state,action)=>{
    switch(action.type){
        case "ADD_TO_FAVOURITE":{
            return {...state,favourite:[...state.favourite,{...action.payload}]}
        }
        case "REMOVE_FROM_FAVOURITE":{
            return {...state,favourite:state.favourite.filter((p)=>p.id!=action.payload.id)}
        }
        default:
            return state;
        
    }
}
export const filterRentProperty = (state,action) =>{
    switch(action.type){
        case"FILTER_BY_LOCATION":{
          return{...state,byLocation:action.payload}
        }
        case"FILTER_BY_PRICE":{
            return{...state,byPrice:action.payload}
        }
        case"FILTER_BY_PROPERTY":{
            return{...state,byProperty:action.payload}
        }
        case"FILTER_BY_MOVE_IN_DATE":{
            return{...state,byMoveInDate:action.payload}
        }
        case"FILTER_BY_SEARCH_QUERY":{
            return{...state,bySearchQuery:action.payload}
        }
        case"ClEAR_ALL_FILTER":{
            return{
                byLocation:"",
                byPrice:"",
                byPropertyType:"",
                byMoveInDate:"",
                bySearchQueary:""
            }
        }
        default:
            return state;
    }


}