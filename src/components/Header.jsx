import React, { Component } from 'react';
import headerLogo from '../img/headerLogo.png';
import solarSystem from '../img/solarSystem.png';
import instagram from '../img/social/headerInstagram.png';
import twitter from '../img/social/headerTwitter.png';
import reddit from '../img/social/headerReddit.png';
import youtube from '../img/social/headerYoutube.png';

class Header extends Component {
    render() {
        return(
            <header id = "header">
                <div className="top__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={headerLogo} alt="" id = "header__logo"/>
                            </div>
                            <div className="offset-md-2 col-md-8 d-none d-md-block">
                                <div className="flex-right">
                                    <nav id = "top__nav">
                                        <ul className = "top__menu__ul">
                                            <li><a href="#"><img src={instagram} alt=""/></a></li>
                                            <li><a href="#"><img src={twitter} alt=""/></a></li>
                                            <li><a href="#"><img src={reddit} alt=""/></a></li>
                                            <li><a href="#"><img src={youtube} alt=""/></a></li>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Home</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="d-md-none">
                                //Burger
                            </div>

                        </div>
                    </div>
                </div>

                <div className="header__content">
                    <div className="container">
                        <div className="row">
                            <div className="header__content__title col-md-6">
                                <h1>
                                    New Age Space
                                </h1>
                                <p className = "header__description">
                                The first crowdfunded online observatory - now you can easily watch night Sky from any place and simply get profit, connect your own telescope to our network and share online streams with scientists and friends! Now we together start the New Age of space exploration.
                                </p>
                                <button className = "button button-red">
                                    START
                                </button>
                            </div>
                            <div className="col-md-6 flex-center-center">
                                <div className="flex-right">
                                    <img src={solarSystem} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
