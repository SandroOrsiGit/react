
export default function CurrencyOutput({currencyValue, currencyTo, currencyList, loading}){
    console.log(currencyTo)

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <h3>{currencyValue * currencyList[currencyTo]}{currencyTo}</h3>
    )
}