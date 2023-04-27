import { useState, useEffect } from "react"
import CurrencyInput from "./CurrencyInput";
import CurrencyOutput from "./CurrencyOutput";
import CurrencyPicker from "./CurrencyPicker"

export default function Converter(){

    const [currencyFrom, setCurrencyFrom] = useState("EUR")
    const [currencyTo, setCurrencyTo] = useState("CZK")
    const [currencyList, setCurrencyList] = useState(null)
    const [currencyValue, setCurrencyValue] = useState(1)
    const [loading, setLoading]=useState(true)

    
    const converterStyle = {display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh', backgroundColor: 'lightblue'}

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/54428200e859166e20572bfc/latest/${currencyFrom}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setCurrencyList(data.conversion_rates)
            setLoading(false)
            
        })
    }, [])

    useEffect(()=>{
        if(currencyFrom){
            setLoading(true)
            fetch(`https://v6.exchangerate-api.com/v6/54428200e859166e20572bfc/latest/${currencyFrom}`)
                .then(res=>res.json())
                .then(data =>{
                    setLoading(false)
                    setCurrencyList(data.conversion_rates)
                })
        }
    }, [currencyFrom])

    
    return(
        <div style={converterStyle}>
            <div>
                <h1>Rate Converter</h1>
                <CurrencyPicker 
                    currencyList={currencyList} 
                    currencyFrom={currencyFrom} 
                    currencyTo={currencyTo} 
                    setCurrencyFrom={setCurrencyFrom} 
                    setCurrencyTo={setCurrencyTo}
                />
                <CurrencyInput currencyFrom={currencyFrom} currencyValue={currencyValue} setCurrencyValue={setCurrencyValue}/>
                <CurrencyOutput currencyValue={currencyValue} currencyTo={currencyTo} currencyList={currencyList} loading={loading}/>
            </div>
        </div>
    )
}