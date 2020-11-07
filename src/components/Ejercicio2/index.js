import React from 'react';
import News from '../News/Body';
import Title from '../News/Title';
import './index.css';

export const Ejercicio2 = ()=> {
    const header = [
        {
            title: "Últimas Noticias",
            date: "Noviembre 2020"
        }
    ]

    const element = [
        {
            image: "https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YFR3YQIG4FDXNCAOKLRGBLKANM.jpg",
            date: "05 Noviembre 2020",
            title: "What happened in Thailand?",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            image: "https://elbocon.pe/resizer/D5PpiyhNkx7UU8yelLPSUNbWVhY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PYWI775IZBGP7D62EPA4MOWKSI.jpg",
            date: "05 Noviembre 2020",
            title: "What happened in Thailand?",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/11/06/16046532937798.jpg",
            date: "05 Noviembre 2020",
            title: "What happened in Thailand?",
            text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ]

    //const {header, element} = news;

    return (
        <section className="container-news">
            { header.map(({title, date}) => (
                <div className="tittle-container-news">
                    <Title 
                    title = { title }
                    date = { date }/>
                </div>  
            ))}
            
            {
                element.map(({image,date,title,text}) => (
                    <div className = "panel-news">
                        <News 
                        image ={ image }
                        date = { date }
                        title = { title }
                        text = { text } />
                    </div>
                ))
            }          
            
        </section>
    )
}