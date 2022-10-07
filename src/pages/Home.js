import './Home.css';
import {gsap} from "gsap";
import {useEffect} from "react";
import {Link} from "react-router-dom";


const Home = () => {

    useEffect(() => {
        // MENU SHOW Y HIDDEN
        const indexNavMenu = document.getElementById('index-nav-menu'),
            indexToggleMenu = document.getElementById('index-nav-toggle'),
            indexCloseMenu = document.getElementById('index-nav-close')

// SHOW
        indexToggleMenu.addEventListener('click', () => {
            indexNavMenu.classList.toggle('show')
        })

// HIDDEN
        indexCloseMenu.addEventListener('click', () => {
            indexNavMenu.classList.remove('show')
        })

//   GSAP ANIMATION

// NAV
        gsap.from('.index-nav__logo, .index-nav__toggle', {opacity: 0, duration: 1, delay: 1, y: 10})
        gsap.from('.index-nav__item', {opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2,})

        gsap.from('.index-home__data', {opacity: 0, duration: 2, delay: 1.9, x: -30})
        gsap.from('.index-home__title', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.index-home__bar', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.index-home__description', {opacity: 0, duration: 1, delay: 1.9, y: 30})

    }, [])

    return (
        <div className="index-contain">
            <header className="index-l-header">
                <nav className="index-nav index-bd-grid">
                    <div>
                        <Link to="../Home" className="index-nav__logo">Ποσειδῶν</Link>
                    </div>

                    <div className="index-nav__toggle" id="index-nav-toggle">
                        <i className='bx bx-menu'>
                            <box-icon name='menu' color='#ffffff'></box-icon>
                        </i>
                    </div>

                    <div className="index-nav__menu" id="index-nav-menu">
                        <div className="index-nav__close" id="index-nav-close">
                            <i className='bx bx-x'>
                                <box-icon name='x' color='#ffffff'></box-icon>
                            </i>
                        </div>

                        <ul className="index-nav__list">
                            <li className="index-nav__item"><Link to="../Home" className="index-nav__link active">Home</Link></li>
                            <li className="index-nav__item"><Link to="../History" className="index-nav__link">History</Link></li>
                            <li className="index-nav__item"><Link to="../Features" className="index-nav__link">Features</Link></li>
                            <li className="index-nav__item"><Link to="../Genealogy" className="index-nav__link">Genealogy</Link></li>
                            <li className="index-nav__item"><Link to="../Legend" className="index-nav__link">Legend</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="index-l-main">
                <section className="index-home" id="index-home">
                    <div className="index-home__container index-bd-grid">
                        <div className="index-home__data">
                            <h2 className="index-home__title">POSEIDON<br/> GREEK MYTHOLOGY</h2>
                            <hr className="index-home__bar"/>
                            <p className="index-home__description">GOD OF THE SEAS <br/>KING OF THE OCEANS</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;