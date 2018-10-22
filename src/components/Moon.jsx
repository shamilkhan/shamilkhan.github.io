import React from 'react';
import moon from '../img/moon.png'
import facebook from '../img/social/moonFacebook.png';

function Moon() {
    return(
        <div id="moon">
            <img src={moon} alt="" width = "100%" id = 'moon__img'/>

                <div className="moon__social">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3 text-center">
                                <h4>Follow us</h4>
                            </div>

                            <div className="col-md-9">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                        <div className="col-2"><img src={facebook} alt=""/></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    
                </div>
        </div>
    )
}

export default Moon;