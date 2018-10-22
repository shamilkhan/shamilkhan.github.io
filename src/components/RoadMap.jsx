import React, { Component } from 'react';
import RoadMapItem from './RoadMapItem';

class RoadMap extends Component {
    render() {
        return(
            <section>
                <div className="container">
                    <h2 class = "h2-white">
                        Development
                    </h2>
                    <RoadMapItem 
                        date = "2018" 
                        text = "Online Observatory developing" 
                        reverse = {false}
                    />
                    <RoadMapItem 
                        date = "2018" 
                        text = "Website release"
                        reverse = {true}
                    />

                     <RoadMapItem 
                        date = "2018" 
                        text = "Crowdfund Campaign Start"
                        reverse = {false}
                    />
                    <RoadMapItem 
                        date = "2018" 
                        text = "XMPP-in-box Server developing"
                        reverse = {true}
                    />

                     <RoadMapItem 
                        date = "2018" 
                        text = "Satellite Developing"
                        reverse = {false}
                    />
                    <RoadMapItem 
                        date = "2018" 
                        text = "Crowdfund Campaign round 2 Start"
                        reverse = {true}
                    />

                    <RoadMapItem 
                        date = "2018" 
                        text = "Finalizing satellite project - private space XMPP server start"
                        reverse = {false}
                    />
                    <RoadMapItem 
                        date = "2018" 
                        text = "Project Expansion up to 10 satellites in 6 years"
                        reverse = {true}
                    />
                </div>
            </section>
        )
    }
}

export default RoadMap;
