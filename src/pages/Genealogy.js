import './Genealogy.css';
import {useEffect} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

const Genealogy = () => {

    useEffect(() => {

        const navMenus = document.getElementById('nav-menu'),
            toggleMenu = document.getElementById('nav-toggle'),
            closeMenu = document.getElementById('nav-close')


        toggleMenu.addEventListener('click', () => {
            navMenus.classList.toggle('show')
        })


        closeMenu.addEventListener('click', () => {
            navMenus.classList.remove('show')
        })

        gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay: 1, y: 10})
        gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2,})

        gsap.from('.titulo-home', {opacity: 0, duration: 1, delay: 1.9, y: 30})
        gsap.from('.card', {opacity: 0, duration: 1, delay: 1.9, y: 30})

    }, [])

    return (
        <div className="genealogy-container">
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="#" className="nav__logo">Ποσειδῶν</a>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-menu'>
                            <box-icon name='menu' color='#ffffff'></box-icon>
                        </i>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <div className="nav__close" id="nav-close">
                            <i className='bx bx-x'>
                                <box-icon name='x' color='#ffffff'></box-icon>
                            </i>
                        </div>

                        <ul className="nav__list">
                            <li className="nav__item"><Link to="../Home" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="../History" className="nav__link">History</Link></li>
                            <li className="nav__item"><Link to="../Features" className="nav__link">Features</Link></li>
                            <li className="nav__item"><Link to="../Genealogy" className="nav__link active">Genealogy</Link></li>
                            <li className="nav__item"><Link to="../Legend" className="nav__link">Legend</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="l-main">
                <section className="home" id="home">
                    <div className="container-home"> {/* CONTENEDOR PRINCIPAL */}
                        <div className="titulo-home">
                            <h1>GENEALOGY</h1>
                        </div>
                        <div className="home-card"> {/* CONTENEDOR CARDS */}
                            <div className="card card0">
                                <div className="textos">
                                    <h3>Triton</h3>
                                </div>
                            </div>
                            <div className="card card1">
                                <div className="textos">
                                    <h3>Polifermo</h3>
                                </div>
                            </div>
                            <div className="card card2">
                                <div className="textos">
                                    <h3>Teseo</h3>
                                </div>
                            </div>
                            <div className="card card3">
                                <div className="textos">
                                    <h3>Caribdis</h3>
                                </div>
                            </div>
                            <div className="card card4">
                                <div className="textos">
                                    <h3>Pegaso</h3>
                                </div>
                            </div>
                            <div className="card card5">
                                <div className="textos">
                                    <h3>Beleforonte</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Genealogy;