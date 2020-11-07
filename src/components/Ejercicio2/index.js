import React from 'react';
import News from '../News/Body';
import Title from '../News/Title';
import './index.css';

export const Ejercicio2 = ()=> {
    const news = {
        header:{
            0:{
                title: "Últimas Noticias",
                date: "Noviembre 2020"
            }
        },
        element: {
            0:{
                image: "https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YFR3YQIG4FDXNCAOKLRGBLKANM.jpg",
                date: "05 Noviembre 2020",
                title: "What happened in Thailand?",
                text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            1:{
                image: "https://elbocon.pe/resizer/D5PpiyhNkx7UU8yelLPSUNbWVhY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PYWI775IZBGP7D62EPA4MOWKSI.jpg",
                date: "05 Noviembre 2020",
                title: "What happened in Thailand?",
                text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            2:{
                image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/11/06/16046532937798.jpg",
                date: "05 Noviembre 2020",
                title: "What happened in Thailand?",
                text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        }
    }

    const {header, element} = news;
    return (
        <section className="container-news">
            <div className="tittle-container-news">
                <Title 
                title = { header[0].title }
                date = { header[0].date }/>
            </div>
            <div className = "panel-news">
            <News 
            image ={ element[0].image }
            date = { element[0].date }
            title = { element[0].title }
            text = { element[0].text } />

            <News 
            image ={ element[1].image }
            date = { element[1].date }
            title = { element[1].title }
            text = { element[1].text } />

            <News 
            image ={ element[2].image }
            date = { element[2].date }
            title = { element[2].title }
            text = { element[2].text } />
            </div>
            
        </section>
    )
}