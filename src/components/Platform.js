import React from 'react'
import '../css/platform.css'

const Platform = ({iconImg, altText, profileName, followersNum, type, statusImg, altTextStatus, number, borderColor, textColor, borderImg}) => {
    return (
        <div className='platform' style={{ borderTop: `5px solid ${borderColor}`, borderImage: `${borderImg}` }}>
            <div className='name'>
                <img src={iconImg} alt={altText} />
                <p>{profileName}</p>
            </div>
            <span>{followersNum}</span>
            <p className='type'>{type}</p>
            <div className='status'>
                <img src={statusImg} alt={altTextStatus} />
                <p style={{ color: `${textColor}` }}>{number} Today</p>
            </div>
        </div>
    )
}

export default Platform
