import React from 'react';
import './index.css';

export const Ejercicio2 = ()=> {
    return (
        <section className="container-news">
            <div className="tittle-container-news">
                <h1>Últimas</h1>
                <h1>Noticias</h1>
                <p>Noviembre 2020</p>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YFR3YQIG4FDXNCAOKLRGBLKANM.jpg" />
                </div>
                <div className="card-body">
                    <div className="news-date">
                        <p>05 Noviembre 2020</p>
                    </div>
                    <div className="news-tittle">
                        <h1>What happened in Thailand?</h1>
                    </div>
                    <div className="news-body">
                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className="news-footer">
                        <p>Find out more</p>
                    </div>
                </div>
            </div>
        </section>
    )
}