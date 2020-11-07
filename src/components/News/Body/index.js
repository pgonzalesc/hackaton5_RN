import React from 'react';

const News = ({image, date, title, text}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-body">
                <div className="news-date">
                    <p>{date}</p>
                </div>
                <div className="news-tittle">
                    <h1>{title}</h1>
                </div>
                <div className="news-body">
                    <p>{text}</p>
                </div>
                <div className="news-footer">
                    <p>Find out more</p>
                </div>
            </div>
        </div>
    )
}

export default News;