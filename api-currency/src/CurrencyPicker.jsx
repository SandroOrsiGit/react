import { useState, useEffect } from "react";

export default function CurrencyPicker({currencyList, currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo}){
    const selectStyle={margin:'5px'}

    if(currencyList){
    return(
        <p>
            Convert rates from 
            <select name="" id="currencyFrom" style={selectStyle} value={currencyFrom} onChange={(e)=>setCurrencyFrom(e.target.value)}>
                {Object.keys(currencyList).map((currency)=><option value={currency}>{currency}</option>)}
            </select>
             to 
             <select name="" id="currencyFrom" style={selectStyle} value={currencyTo} onChange={(e)=>setCurrencyTo(e.target.value)}>
                {Object.keys(currencyList).map((currency)=><option value={currency}>{currency}</option>)}
            </select>
        </p>
    )
}}
