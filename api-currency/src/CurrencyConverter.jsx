import { useState } from "react"
import CurrencyPicker from "./CurrencyPicker"

export default function Converter(){

    const converterStyle = {display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh', backgroundColor: 'lightblue'}
    return(
        <div style={converterStyle}>
            <div>
                <h1>Rate Converter</h1>
                <CurrencyPicker/>
            </div>
        </div>
    )
}