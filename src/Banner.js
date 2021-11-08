import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <section className="banner">
            <div>
                <ul>
                    <li>
                        Hire a pro
                    </li>
                    <li>
                        Find customers
                    </li>
                </ul>
                <h1>Find local professionals for<br /> pretty much anything.</h1>
                <form>
                    <input type="text" placeholder="What's on your to-do list?" className="banner__search-task" />
                    <input type="text" placeholder="Zip code" className="banner__search-zip-code" />
                    <button>
                        Search
                    </button>
                </form>
            </div>
            <picture>
                <img src="https://production-next-images-cdn.thumbtack.com/i/355350944811474947/width/768.jpeg" className="banner__image" alt=""/>
            </picture>
        </section>
    )
}

export default Banner
