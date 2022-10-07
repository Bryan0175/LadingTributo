import './Legend.css';
import {useEffect} from "react";
import {gsap} from "gsap";
import poseidon1 from '../static/img/poseidon.png';
import poseidon2 from '../static/img/poseidon2.png';
import poseidon3 from '../static/img/poseidon4.png';
import {Link} from "react-router-dom";

const Legend = () => {

    useEffect(() => {
        // MENU SHOW Y HIDDEN
        const legendNavMenu = document.getElementById('legend-nav-menu'),
            legendToggleMenu = document.getElementById('legend-nav-toggle'),
            legendCloseMenu = document.getElementById('legend-nav-close')

// SHOW
        legendToggleMenu.addEventListener('click', () => {
            legendNavMenu.classList.toggle('show')
        })

// HIDDEN
        legendCloseMenu.addEventListener('click', () => {
            legendNavMenu.classList.remove('show')
        })

//   GSAP ANIMATION

// NAV
        gsap.from('.legend-nav__logo, .legend-nav__toggle', {opacity: 0, duration: 1, delay: 1, y: 10})
        gsap.from('.legend-nav__item', {opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2,})

        gsap.from('.legend-titulo-home', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.legend-text', {opacity: 0, duration: 1, delay: 1.9, y: 30, stagger: 0.2,})
        gsap.from('.legend-img', {opacity: 0, duration: 1, delay: 1.9, y: 30, stagger: 0.2,})

    }, [])

    return (
        <div className="legend-contain">
            <header className="legend-l-header">
                <nav className="legend-nav legend-bd-grid">
                    <div>
                        <a href="Home.js" className="legend-nav__logo">Ποσειδῶν</a>
                    </div>

                    <div className="legend-nav__toggle" id="legend-nav-toggle">
                        <i className='bx bx-menu'>
                            <box-icon name='menu' color='#ffffff'></box-icon>
                        </i>
                    </div>

                    <div className="legend-nav__menu" id="legend-nav-menu">
                        <div className="legend-nav__close" id="legend-nav-close">
                            <i className='bx bx-x'>
                                <box-icon name='x' color='#ffffff'></box-icon>
                            </i>
                        </div>

                        <ul className="legend-nav__list">
                            <li className="legend-nav__item"><Link to="../Home" className="legend-nav__link">Home</Link></li>
                            <li className="legend-nav__item"><Link to="../History" className="legend-nav__link">History</Link></li>
                            <li className="legend-nav__item"><Link to="../Features" className="legend-nav__link">Features</Link></li>
                            <li className="legend-nav__item"><Link to="../Genealogy" className="legend-nav__link">Genealogy</Link></li>
                            <li className="legend-nav__item"><Link to="../Legend" className="legend-nav__link active">Legend</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="legend-l-main">
                <section className="legend-home" id="legend-home">
                    <div className="legend-container">
                        <h2 className="legend-titulo-home">LEGENDS</h2>
                        <div className="legend-card">
                            <div className="legend-img">
                                <img className="legend-img-item" src={poseidon1} alt="Poseidon"/>
                            </div>
                            <div className="legend-text">
                                <h2>The odyssey</h2>
                                <p>One of the most famous stories in Greek mythology is the Odyssey, which recounts
                                    Ulysses' travels through Greece. The greatest enemy of the story is Poseidon, being
                                    the cause of the long journey of the Greek heroes. The main reason Poseidon became
                                    an enemy of the Greeks was because Odysseus had blinded the Cyclops Polyphemus, who
                                    was the son of Poseidon.</p>
                            </div>
                        </div>
                        <div className="legend-card">
                            <div className="legend-text" id="leg-text">
                                <h2>The minotaur</h2>
                                <p>One of the versions of the creation of the Minotaur says that the god of the sea gave
                                    a large white bull to the king of Crete to be sacrificed in his honor, but the king
                                    decided to keep it. As a punishment Poseidon made the king's wife have a child with
                                    the bull, the so-called Minotaur.</p>
                            </div>
                            <div className="legend-img" id="leg-img">
                                <img className="legend-img-item" src={poseidon2} alt="Poseidon"/>
                            </div>
                        </div>
                        <div className="legend-card">
                            <div className="legend-img">
                                <img className="legend-img-item" src={poseidon3} alt="Poseidon"/>
                            </div>
                            <div className="legend-text">
                                <h2>Medusa</h2>
                                <p>Medusa is said to have been a beautiful maiden who was seduced by Poseidon in a
                                    temple of Athena. The goddess of wisdom as punishment decided to turn Medusa into a
                                    monster with hair made of snakes, and whose gaze she would turn anyone into
                                    stone.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Legend;