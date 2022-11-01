import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
// charts
import { SymbolOverview } from "react-tradingview-embed";
//componnets
import Louder from './Louder';
// context
import { unitHandler } from '../context/UnitReduxProvider';

const Coindata = (props) => {

    const id = props.match.params.id
    const symbolid = id.split("_")
    const [description , setDescription] = useState([])
    const [name , setName] = useState("")
    const [image , setImage] = useState({})
    const [priceU , setPriceU] = useState(0)
    const [priceE , setPriceE] = useState(0)
    const [rank , setRank] = useState(0)
    const [marketcapU , setMarketCapU] = useState(0)
    const [marketcapE , setMarketCapE] = useState(0)
    const [error , setError] = useState("")

    axios.get(`https://api.coingecko.com/api/v3/coins/${symbolid[1]}`)
    .then(Response => {
        setDescription(Response.data.description.en.replace(/<(.|\n)*?>/g, '').split(".")[0])
        setName(Response.data.name)
        setImage(Response.data.image.large)
        setMarketCapU(Response.data.market_data.market_cap.usd);
        setMarketCapE(Response.data.market_data.market_cap.eur);
        setRank(Response.data.market_data.market_cap_rank);
        setPriceU(Response.data.market_data.current_price.usd)
        setPriceE(Response.data.market_data.current_price.eur)
    })
    .catch(Error => {
        console.log(Error.message);
        setError(Error.message)
    })
    const {state} = useContext(unitHandler) 
    return (
        <div>
            {name.length ? 
            <div className='flex justify-start items-center flex-col mt-7 xl:flex-row xl:pl-10 xl:pr-6'>

              <div className='w-3/4 text-white md:mt-2 sm:mb-4 xl:w-1/3 xl:mr-8'>
                  <div className='flex flex-col items-center'>
                     <img src={image} alt="coin" className='w-24 md:w-36 xl:w-48' />
                     <h2 className='text-2xl font-bold mb-5 sm:mb-8 mt-4 md:text-3xl xl:text-4xl'>{name}</h2>
                 </div>
                   <p className='text-xs  font-semibold text-justify mb-5 sm:mb-8 sm:text-sm md:text-base'>{description}</p>
                   <p className='mt-2 sm:mt-5 font-bold text-xs md:text-sm'>Rank:  <span className='ml-1 text-yellow-300'>{rank}</span> </p>  
                   <p className='mt-2 sm:mt-5 font-bold text-xs md:text-sm'>Current Price:  <span className='ml-1 text-yellow-300'>$ {state.unitC === "USDT" ? priceU.toLocaleString() : priceE.toLocaleString()}</span> </p>  
                   <p className='mt-2 sm:mt-5 font-bold text-xs md:text-sm'>Market Cap:  <span className='ml-1 text-yellow-300'>$ {state.unitC === "USDT" ? marketcapU.toLocaleString() :marketcapE.toLocaleString()}</span> </p>  
            </div>

             <div className=' h-56 w-full sm:w-11/12 sm:h-72 md:h-72 lg:h-96 px-8 pt-8 mb-8 xl:pt-0' >
            <div className='rounded-md overflow-hidden border border-gray-400'>
              { symbolid[0] === "BUSD" || symbolid[0] === "USDT" || symbolid[0] === "STETH" ?
                <SymbolOverview widgetProps={{symbols : [[`COINBASE:${symbolid[0]}${state.unitC2}|1D`]] , width : "100%" , height : "100%", chartOnly : "true" }} /> :
                <SymbolOverview widgetProps={{symbols : [[`KRAKEN:${symbolid[0]}${state.unitC}|1D`]]  , width : "100%" , height : "100%", chartOnly : "true"  }} /> 
                 }
            </div>
            </div>

            </div> : error ? <h1 className='text-center text-primary mt-14 font-bold text-2xl'>{error}</h1> : 
             <div className='text-center text-white mt-14 font-bold text-xl'><Louder/> </div>  }
        </div>
    );
};
export default Coindata;
