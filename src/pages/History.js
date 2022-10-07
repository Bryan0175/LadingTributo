import './History.css';
import {gsap} from "gsap";
import {useEffect} from "react";
import {Link} from "react-router-dom"

const Home = () => {

    useEffect(() => {
        // MENU SHOW Y HIDDEN
        const HistoryNavMenu = document.getElementById('history-nav-menu'),
            HistoryToggleMenu = document.getElementById('history-nav-toggle'),
            HistoryCloseMenu = document.getElementById('history-nav-close')

// SHOW
        HistoryToggleMenu.addEventListener('click', () => {
            HistoryNavMenu.classList.toggle('show')
        })

// HIDDEN
        HistoryCloseMenu.addEventListener('click', () => {
            HistoryNavMenu.classList.remove('show')
        })

//   GSAP ANIMATION

// NAV
        gsap.from('.history-nav__logo, .history-nav__toggle', {opacity: 0, duration: 1, delay: 1, y: 10})
        gsap.from('.history-nav__item', {opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2,})

// HOME
        gsap.from('.history-home__data', {opacity: 0, duration: 2, delay: 1.9, x: -30})
        gsap.from('.history-home__title', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.history-home__description', {opacity: 0, duration: 1, delay: 1.9, y: 30})

    }, [])

    return (
        <div className="history-contain">
            <header className="history-l-header">
                <nav className="history-nav history-bd-grid">
                    <div>
                        <Link to="../Home" className="history-nav__logo">Ποσειδῶν</Link>
                    </div>

                    <div className="history-nav__toggle" id="history-nav-toggle">
                        <i className='bx bx-menu'>
                            <box-icon name='menu' color='#ffffff'></box-icon>
                        </i>
                    </div>

                    <div className="history-nav__menu" id="history-nav-menu">
                        <div className="history-nav__close" id="history-nav-close">
                            <i className='bx bx-x'>
                                <box-icon name='x' color='#ffffff'></box-icon>
                            </i>
                        </div>

                        <ul className="history-nav__list">
                            <li className="history-nav__item"><Link to="../Home" className="history-nav__link">Home</Link></li>
                            <li className="history-nav__item"><Link to="../History" className="history-nav__link active">History</Link></li>
                            <li className="history-nav__item"><Link to="../Features" className="history-nav__link">Features</Link></li>
                            <li className="history-nav__item"><Link to="../Genealogy" className="history-nav__link">Genealogy</Link></li>
                            <li className="history-nav__item"><Link to="../Legend" className="history-nav__link">Legend</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="history-l-main">
                <section className="history-home" id="history-home">
                    <div className="history-home__container history-bd-grid">
                        <div className="history-home__data">
                            <h2 className="history-home__title">HISTORY</h2>
                            <p className="history-home__description">Poseidon​ or Posidon​ (ancient Greek: Ποσειδῶν3​,
                                romanization: Poseidỗn, pronunciation: classical: poseːdɔ́ː̀n, Koiné: po̞siːdˈo̞ːn,
                                Byzantine: posiðˈon) in Greek mythology was the supreme god of the sea, oceans, all
                                water currents and also of the earthquakes. His importance in the ancient world was so
                                enormous that he was used by later cultures such as the Etruscans or the Romans, being
                                called Nethuns and Neptune, respectively</p>
                            <p className="history-home__description">The importance that Poseidon came to have in Greek
                                mythology is demonstrated by the importance he had in many cities, being the patron of
                                great cities such as Corinth and coastal cities, but also being the second most
                                important god of key polis such as Athens.</p>
                            <p className="history-home__description">Poseidon is known both for his good deeds and for
                                being one of the deities with the worst deeds. On its good side, we can see facts such
                                as the creation of islands or keeping the sea calm, but on its evil side we can see the
                                destruction that it caused with its actions, destroying islands with its earthquakes and
                                floods or causing some of the greatest curses. of Greek history.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;