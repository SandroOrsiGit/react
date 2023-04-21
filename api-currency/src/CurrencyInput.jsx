export default function CurrencyInput({currencyFrom, currencyValue, setCurrencyValue}){
    
    return(
        <div>
            <input type="number" value={currencyValue} onChange={(e)=>setCurrencyValue(e.target.value)}/> <span>{currencyFrom}</span>
        </div>
    )
}