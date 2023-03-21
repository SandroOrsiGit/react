import { useState, useEffect } from "react";

export default function CurrencyPicker(){
    const [currencyFrom, setCurrencyFrom] = useState("EUR")
    const [currencyTo, setCurrencyTo] = useState("CZK")
    const [currencyList, setCurrencyList] = useState(null)

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/791ae1d5a33cf5cf2f404ac3/latest/${currencyFrom}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setCurrencyList(data.conversion_rates)
            
        })
    })

    if(currencyList){
    return(
        <p>
            Convert rates from 
            <select name="" id="currencyFrom">
                {Object.keys(currencyList).map((currency)=><option>{currency}</option>)}
            </select>
             to 
             <select name="" id="currencyFrom">
                {Object.keys(currencyList).map((currency)=><option>{currency}</option>)}
            </select>
        </p>
    )
}}
