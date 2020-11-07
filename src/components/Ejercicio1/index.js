import React, {useState} from 'react';
import './index.css';

export const Ejercicio1 = () => {
    const [exchange, setExchange] = useState('');
    //const [rate, setRate] = useState(0);
    //const rate = 3.6;
    const handleExchange = () => {
        let amount = document.querySelector('#amount').value;
        let from = document.querySelector('#countryFrom').value;
        let to = document.querySelector('#countryTo').value;
        //console.log(amount);
        // console.log(from);
        // console.log(to);
        getExchange(amount, from, to);
        //setExchange(`$${amount*rate}`);
    }

    const getCountries = async (id) => {
        try {
            const resp = await fetch('https://free.currconv.com/api/v7/countries?apiKey=4c17183861bc07f44551');
            const data = await resp.json();
            const results = data.results;
            //console.log('countries', results);
            const select = document.querySelector(`#${id}`);
            select.innerHTML = "";
            for(let key in results) {
                if(results[key].currencyId === 'PEN')
                    select.innerHTML = select.innerHTML + `<option value = "${results[key].currencyId}" selected>${results[key].currencyId}</option>`;
                else
                    select.innerHTML = select.innerHTML + `<option value = "${results[key].currencyId}">${results[key].currencyId}</option>`;
            }
        } catch (error){
            console.error(error);
        }
    }

    const getExchange = async (amount, from, to) => {
        try {
            //const resp = await fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN');
            const resp = await fetch(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=4c17183861bc07f44551`);
            const data = await resp.json();
            const result = amount * data[`${from}_${to}`];
            console.log(result);
            setExchange(result);
        } catch (error){
            console.error(error);
        }
        
    }
    window.onload = () => {
        getCountries('countryFrom');
        getCountries('countryTo');
    }
    // const load = () => {
    //     getCountries('countryFrom');
    //     getCountries('countryTo');
    // }

    //getCountries('countryFrom');
    //getCountries('countryTo');
    
    return (
        <section className="container">
            <div className="tittle-container">
                <h1>Conversor de Divisas</h1>
            </div>
            <div className="panel">
                <div className="tittle-panel">
                    <label>Tipo de Cambio</label>
                    <p>{exchange}</p>
                </div>
                <div className="body-amount">
                    <label>Cantidad</label>
                    <input type="number" id="amount" name="amount"/>
                </div>
                <div className="body-countries">
                    <label>From</label>
                    <div className="body-selectors">
                        <select id="countryFrom" name="countryFrom">
                            {/* <option value="NON" selected>NON</option> */}
                        </select>
                        {/* <button>OK</button> */}
                        <select id="countryTo" name="countryTo">
                            {/* <option value="USD" selected>USD</option> */}
                        </select>
                    </div>
                </div>
                <div className="body-btn">
                    <button onClick={handleExchange}>CONVERTIR</button>
                </div>
            </div>
        </section>
    )
}