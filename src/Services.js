import React from 'react';
import './Services.css';

function Services({ heading, image1, image2, image3, title1, title2, title3}) {
    return (
        <div className="services">
            <h2>{heading}</h2>
            <ul>
                <li>
                    <img src={image1} />
                    {title1}
                </li>
                <li>
                    <img src={image2} />
                    {title2}
                </li>
                <li>
                    <img src={image3} />
                    {title3}
                </li>
            </ul>
            
        </div>
    )
}

export default Services
