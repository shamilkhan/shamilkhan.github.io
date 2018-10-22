import React, { Component } from 'react';

class Video extends Component {
    render() {
        return(
            <section id = "video">
                <div className="container">
                    <div className="row justify-content-center">
                        <iframe id = "header__video" src="https://www.youtube.com/embed/3jT_q7dt-cM" frameborder="0" allowfullscreen> </iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default Video;
