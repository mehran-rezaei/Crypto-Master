import React, { createContext, useReducer } from 'react';

const initialState = {
    unitL : "eur",
    unitC : "EUR",
    unitC2 : "EUR"
}
const unitReducer = (state,action ) => {
    switch(action.type){
        case "USD_L" :
            return {
                ...state ,
                 unitL : "usd",
                 unitC : "USDT",
                 unitC2 : "USD"
            }
        case "EUR_L" :
            return {
                ...state,
                unitL : "eur",
                unitC : "EUR",
                unitC2 : "EUR"
            }    

        default : return state    
    }
}
export const unitHandler = createContext()
const UnitReduxProvider = ({children}) => {
    const [state , dispatch] = useReducer(unitReducer,initialState)
    return (
         <unitHandler.Provider value={{state , dispatch}}>
                    {children}
         </unitHandler.Provider>
    );
};
export default UnitReduxProvider;