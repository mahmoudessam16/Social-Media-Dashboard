import React from 'react'
import '../css/today.css'

const Today = ({Pagetext, imgSrc, altText, number, color, imgType, altImgType, percentage}) => {
    return (
        <div className='today-card'>
            <div className='type-platform'>
                <p>{Pagetext}</p>
                <img src={imgSrc} alt={altText} />
            </div>
            <div className='status-number'>
                <h3>{number}</h3>
                <div className='ratio'>
                    <img src={imgType} alt={altImgType} />
                    <p style={{ color: `${color}` }}>{percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default Today
