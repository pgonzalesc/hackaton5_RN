import React from 'react';
import './index.css';

export const Ejercicio1 = () => {
    return (
        <section className="container">
            <div className="tittle-container">
                <h1>Conversor de Divisas</h1>
            </div>
            <div className="panel">
                <div className="tittle-panel">
                    <label>Tipo de Cambio</label>
                    <p>$27.77</p>
                </div>
                <div className="body-amount">
                    <label>Cantidad</label>
                    <input type="text" />
                </div>
                <div className="body-countries">
                    <label>From</label>
                    <div className="body-selectors">
                        <select>
                            <option selected>NON</option>
                        </select>
                        <button>OK</button>
                        <select>
                            <option selected>USD</option>
                        </select>
                    </div>
                </div>
                <div className="body-btn">
                    <button>CONVERTIR</button>
                </div>
            </div>
        </section>
    )
}