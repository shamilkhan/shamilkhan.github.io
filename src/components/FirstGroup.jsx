import React, { Component } from 'react';
import '../styles/main.sass';
import Header from './Header';
import Video from './Video';
import RoadMap from './RoadMap';
import TransitionTop from './TransitionTop';


class FirstGroup extends Component {
    render() {
        return(
            <div id = "first__group">
                <Header/>
                <Video/>
                <RoadMap/>
                <TransitionTop/>
            </div>
        )
    }
}

export default FirstGroup;
