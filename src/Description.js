import React from 'react';
import './Description.css'

function Description() {
    return (
        <section className="description">
            <div className="description__wrapper">
                <div className="description__left">
                    <h3>
                        When you need to hire someone – a landscaper, a DJ, anyone – Thumbtack finds them for you for free.
                    </h3>
                    <p>
                        See price estimates, read reviews and chat with pros, all in the app.
                    </p>
                    <div>
                        <img src="https://production-next-images-cdn.thumbtack.com/i/362271910467772421/width/320.png" alt="" />
                        <img src="https://production-next-images-cdn.thumbtack.com/i/362272018606170113/width/320.png" alt="" />
                    </div>
                </div>
                <div className="description__right">
                    <img src="https://production-next-images-cdn.thumbtack.com/i/362270079042650117/width/640.jpeg" />
                </div>
            </div>
        </section>
    )
}

export default Description
