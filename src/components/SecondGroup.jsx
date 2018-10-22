import React from 'react';
import Community from './Community';
import Information from './Information';
import Moon from './Moon';
import Footer from './Footer';
import TransitionBottom from './TransitionBottom';

function SecondGroup() {
    return(
        <div id="second__group">
            <TransitionBottom/>
            <Community/>
            <Information/>
            <Moon/>
            <Footer/>
        </div>
    )
}

export default SecondGroup;