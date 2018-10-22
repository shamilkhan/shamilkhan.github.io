import React from 'react';
import diagram from '../img/diag.png';

function Distribution() {
    return(
        <section id = 'distribution'>
            <h2>Token distribution</h2>
            <div className="flex-center-center">
                <img src={diagram} alt=""/>
            </div>
        </section>
    )
}

export default Distribution;