import React, { useContext, useEffect, useState } from 'react';
// Api
import { getCoin  } from '../services/api';
// components
import Louder from './Louder';
import Coin from './Coin';
// context
import { unitHandler } from '../context/UnitReduxProvider';

const Landing = (props) => {
        const [coins , setCoins ] = useState([])
        const [search , setSearch] = useState("")
        const [page , setPage] = useState(1)
        const { state } = useContext(unitHandler)

        useEffect(() => {
            const FetchApi = async () => {
                    const data  = await getCoin(page , state.unitL)
                     setCoins(data)
            }
            FetchApi()
        }, [page , state.unitL])

        const searchHandler = (event) => {
            setSearch(event.target.value)
        }
        const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
        const pageHandler = () => {
            setPage( page + 1)
        }
    return (
        <div>
            <div className='flex justify-center mt-9 mb-11'>
                <div>
                     <input type="text" placeholder='Search ...' 
                     value={search} onChange={searchHandler}
                     className='w-60 shadow-xl sm:w-80 lg:w-96 h-8 sm:h-9 text-white  placeholder:text-white border border-gray-400 active:border-white px-4 sm:px-6 py-1 rounded-md bg-bodybg' />
                </div>
            </div>

            <div className='flex justify-center text-white '>
                { coins.length ? 
            <div>
                <div className='mb-3 px-2'>
                    <div className='bg-[#0f0142] h-10 mx-1 sm:mx-0  sm:h-11 px-4 sm:px-6 rounded-lg grid grid-cols-3 sm:grid-cols-5  items-center text-center  shadow-md'>
                        <span className='text-[11px] sm:text-xs mx-1 font-bold' >Name</span>
                        <span className='text-[11px] sm:text-xs mx-1 font-bold hidden sm:block' >Symbol</span>
                        <span className='text-[11px] sm:text-xs mx-1 font-bold' >Current Price</span>
                        <span className='text-[11px] sm:text-xs mx-1 font-bold' >Price Change</span>
                        <span className='text-[11px] sm:text-xs mx-1 font-bold hidden sm:block' >Market Cap</span>
                    </div>
                </div> 
                <div className='rounded-[10px] overflow-hidden px-3 sm:px-0'>
                    {searchedCoins.map(coin => <Coin key={coin.id} 
                         name={coin.name}
                         symbol={coin.symbol}
                         image={coin.image}
                         price={coin.current_price}
                         priceChange={coin.price_change_percentage_24h}
                         marketCap={coin.market_cap}
                         id={coin.id} /> )}
                    <div className='flex items-center justify-center h-16 mb-4' >
                       { page > 1 &&   <button className='font-bold' onClick={() => setPage(page - 1)}>prew</button>}
                        <button className={page === 1 ? 'samePagebtn' : 'buttonpage'} onClick={() => setPage(1)} >1</button>
                        <button className={page === 2 ? 'samePagebtn' : 'buttonpage'} onClick={() => setPage(2)} >2</button>
                        <button className={page === 3 ? 'samePagebtn' : 'buttonpage'} onClick={() => setPage(3)} >3</button>
                        <button className={page === 4 ? 'samePagebtn' : 'buttonpage'} onClick={() => setPage(4)} >4</button>
                        { page < 4 &&  <button className='font-bold' onClick={pageHandler}>next</button>  }
                    </div>
                </div> 
           </div>:
           <Louder />}
        </div>
        </div>
    );
};
export default Landing;