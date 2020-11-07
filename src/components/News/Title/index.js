import React from 'react';

const Title = ({title, date}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{date}</p>
        </>
    )
}

export default Title;