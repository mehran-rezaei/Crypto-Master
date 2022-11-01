import axios from "axios";

const getCoin= async (type , unit) => {
    if(unit === "usd"){
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${type}&sparkline=false`)
        return response.data
    } else if(unit === "eur"){
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=${type}&sparkline=false`)
        return response.data
    }
}
export { getCoin}