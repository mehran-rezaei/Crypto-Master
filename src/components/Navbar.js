import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// context
import { unitHandler } from '../context/UnitReduxProvider';

const Navbar = () => {
    const { state ,dispatch} = useContext(unitHandler)
    const exchangeUnit = (event) => {
        if (event.target.value === "usd"  && state.unitL ==="EUR" ) {
            dispatch({type : "USD_L"})
        }else if (event.target.value === "eur"  && state.unitL ==="USD") {
            dispatch({type : "EUR_L"})
        } else if(event.target.value === "usd" && state.unitC ==="EUR" && state.unitC2 === "EUR"){
            dispatch({type : "USD_L"})
        } else if(event.target.value === "eur" && state.unitC ==="USDT" && state.unitC2 === "USD"){
            dispatch({type : "EUR_L"})
        }
     }
    return (
              <div className='flex justify-between items-center px-6 py-6 bg-navbg shadow-[0_7px_11px_6px_rgb(0,0,0,0.39)] md:px-20'>
                 <div className='text-titlecolor font-bold text-lg hover:text-yellow-400 transition-all ease-in duration-200 '>
                    <h3><Link to="/">Crypto Master </Link></h3>
                 </div>
                 <div>
                     <select 
                     onClick={exchangeUnit}
                     className='bg-navbg text-white font-bold text-xs  border-white border rounded-md py-1 w-20 pl-1 md:w-28 cursor-pointer'>
                         <option  value="eur" key="eur">EUR</option>
                         <option  value="usd" key="usd">USD</option>
                     </select>
                 </div>
             </div>
    );
};

export default Navbar;