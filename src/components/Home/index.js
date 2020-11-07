import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ()=> {
    return (
        <>
            <section>
                <div>
                    <div>
                        <h1>Inicio</h1>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/ejercicio1">
                                    Ejercicio 1
                                </Link>
                            </li>
                            <li>
                                <Link to="/ejercicio2">
                                    Ejercicio 2
                                </Link>
                            </li>
                            <li>
                                <Link to="/ejercicio3">
                                    Ejercicio 3
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}