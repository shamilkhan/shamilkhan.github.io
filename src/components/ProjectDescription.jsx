import React, {Component} from 'react';
import rocket from '../img/itemsRocket.png'
import earth from '../img/itemsEarth.png'
import sateLite from '../img/itemsSateLite.png'

class ProjectDescription extends Component {
    render() {
        return(
            <section id = "description">
                <div className="container">
                    <div className="row ">

                        <div className="description__item col-sm-4">
                            <img src={rocket} alt=""/>
                            <h3>Start</h3>
                            <p>
                                We started like a small private rocket building laboratory and we have already have more than 10 rockets liftoffs successfully released. Our dream is to make rockets cheap and easy in use to any city or village cause we concentrate on making small (up to 7 meters) rockets.
                            </p>
                        </div>

                        <div className="description__item col-sm-4">
                            <img src={earth} alt=""/>
                            <h3>Mission</h3>
                            <p>
                                We want to  show people that internet is more alike space than it is told to be - we just allow them to be paid for studying space, no fee - everything is completely free.
                            </p>
                        </div>

                        <div className="description__item col-sm-4">
                            <img src={sateLite} alt=""/>
                            <h3>Satellite</h3>
                            <p>
                                We combine satellite technologies and cryptography (permanent Of-The-Record encryption) to make the most safe way of communication in internet - first 100 investors (1 BTC) will have an private and everlasting access to XMPP Satellite.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// Ракета (слева) Start

// We started like a small private rocket building laboratory and we have already have more than 10 rockets liftoffs successfully released. Our dream is to make rockets cheap and easy in use to any city or village cause we concentrate on making small (up to 7 meters) rockets.

// Земля: Mission

// We want to  show people that internet is more alike space than it is told to be - we just allow them to be paid for studying space, no fee - everything is completely free.

// Спутник: Satellite

// We combine satellite technologies and cryptography (permanent Of-The-Record encryption) to make the most safe way of communication in internet - first 100 investors (1 BTC) will have an private and everlasting access to XMPP Satellite.

export default ProjectDescription;