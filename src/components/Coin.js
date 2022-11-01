import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
    const {name , id, symbol , price , image , marketCap , priceChange}= props
    return (
        <>
        { name === "BNB" || name === "Lido Staked Ether" ?
              null :
              <Link to={`/coin/${symbol.toUpperCase()}_${id.toLowerCase()}`} style={{textDecoration : "none" , color : "inherit"}} >
              <div className='flex items-center text-[11px] justify-between mb-4 rounded-md shadow-2xl sm:text-xs font-bold  w-full px-5 lg:px-10 py-3  bg-[#474747] md:text-sm hover:bg-[#201c1c1a] transition ease-in duration-100'>
                <div className='flex items-center w-32 sm:w-44   md:w-48'>
                   <img src={image} alt="" className='mr-3 sm:mr-5 w-6 sm:w-9' />
                   <span className='text-[10px] sm:text-xs md:text-sm'>{name}</span>
                </div>
             <span className='hidden sm:block sm:w-24 md:w-32'>{symbol.toUpperCase()}</span>
             <span className='w-16  text-left sm:w-24 md:w-32' >$ {price.toLocaleString()}</span>
             <span className={priceChange > 0 ? 'text-[#0c0]  w-16  text-right sm:text-left sm:w-20 md:w-32' :'text-[#ff2626] w-16 sm:w-20 text-right sm:text-left md:w-32' }>{priceChange.toFixed(2)} %</span>
             <span className='hidden sm:block md:w-32' >{marketCap.toLocaleString()}</span>
         </div>
         </Link>
            } 
        </>
    );
};

export default Coin;