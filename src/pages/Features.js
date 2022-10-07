import './Features.css'
import {useEffect} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

const Features = () => {


    useEffect(() => {
        // MENU SHOW Y HIDDEN
        const FeaturesNavMenu = document.getElementById('features-nav-menu'),
            FeaturesToggleMenu = document.getElementById('features-nav-toggle'),
            FeaturesCloseMenu = document.getElementById('features-nav-close')

// SHOW
        FeaturesToggleMenu.addEventListener('click', () => {
            FeaturesNavMenu.classList.toggle('show')
        })

// HIDDEN
        FeaturesCloseMenu.addEventListener('click', () => {
            FeaturesNavMenu.classList.remove('show')
        })

//   GSAP ANIMATION

// NAV
        gsap.from('.features-nav__logo, .features-nav__toggle', {opacity: 0, duration: 1, delay: 1, y: 10})
        gsap.from('.features-nav__item', {opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2,})

// HOME
        gsap.from('.features-home__data', {opacity: 0, duration: 2, delay: 1.9, x: -30})
        gsap.from('.features-home__title', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.features-home__description', {opacity: 0, duration: 1, delay: 1.9, y: 30})

    }, [])

    return (
        <div className="features-contain">
            <header className="features-l-header">
                <nav className="features-nav features-bd-grid">
                    <div>
                        <Link to="../Home" className="features-nav__logo">Ποσειδῶν</Link>
                    </div>

                    <div className="features-nav__toggle" id="features-nav-toggle">
                        <i className='bx bx-menu'>
                            <box-icon name='menu' color='#ffffff'></box-icon>
                        </i>
                    </div>

                    <div className="features-nav__menu" id="features-nav-menu">
                        <div className="features-nav__close" id="features-nav-close">
                            <i className='bx bx-x'>
                                <box-icon name='x' color='#ffffff'></box-icon>
                            </i>
                        </div>

                        <ul className="features-nav__list">
                            <li className="features-nav__item"><Link to="../Home" className="features-nav__link">Home</Link></li>
                            <li className="features-nav__item"><Link to="../History" className="features-nav__link">History</Link></li>
                            <li className="features-nav__item"><Link to="../Features" className="features-nav__link active">Features</Link></li>
                            <li className="features-nav__item"><Link to="../Genealogy" className="features-nav__link">Genealogy</Link></li>
                            <li className="features-nav__item"><Link to="../Legend" className="features-nav__link">Legend</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="features-l-main">
                <section className="features-home" id="features-home">
                    <div className="features-home__container features-bd-grid">
                        <div className="features-home__data">
                            <h2 className="features-home__title">FEATURES</h2>
                            <div className="features-home__description">
                                <ul className="features-nav__description">
                                    <li className="features-description__item">He is second in power to Zeus.</li>
                                    <li className="features-description__item">Brother to Hades and Zeus.</li>
                                    <li className="features-description__item">His weapon is the trident (three-pronged spear).</li>
                                    <li className="features-description__item">He created the first horse.</li>
                                    <li className="features-description__item">He was a god with great mood swings, being able to be benevolent and angry and destroy entire islands.</li>
                                    <li className="features-description__item">It is moved by a carriage carried by sea horses.</li>
                                    <li className="features-description__item">It was capable of creating earthquakes and other natural disasters.</li>
                                    <li className="features-description__item">He owned a great sea palace.</li>
                                    <li className="features-description__item">He can communicate with marine animals.</li>
                                    <li className="features-description__item">Aphrodite bore Poseidon three sons.</li>
                                    <li className="features-description__item">His wife was Amphitrite, a nymph and ancient goddess of the sea.</li>
                                    <li className="features-description__item">Poseidon was killed by his nephew Ares along with the other Olympian Gods.</li>
                                    <li className="features-description__item">Poseidon had a maximum of 7 children.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Features;