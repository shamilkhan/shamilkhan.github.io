import React from 'react';
import footerLogo from '../img/footerLogo.png';

function Footer() {
    return(
        <footer id = 'footer'>
            <div className="container" id = "footer__top">
                <div className="row">
                    <div className="col-sm-1 offset-sm-1">
                        <img src= {footerLogo} alt=""/>
                    </div>

                    <div className="col-sm-2 offset-sm-1">
                        <div className="footer__top__item">
                            <a href="">Idea</a>
                        </div>
                        <div className="footer__top__item">
                            <a href="">Token Tech List</a>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="footer__top__item">
                            <a href="">Terms</a>
                        </div>
                        <div className="footer__top__item">
                            <a href="">Contuct us</a>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="footer__top__item">
                            <a href="">Road Map</a>
                        </div>
                        <div className="footer__top__item">
                            <a href="">Community</a>
                        </div>
                    </div>

                     <div className="col-sm-2">
                        <div className="footer__top__item">
                            <a href="">Information</a>
                        </div>
                        <div className="footer__top__item">
                            <a href="">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;