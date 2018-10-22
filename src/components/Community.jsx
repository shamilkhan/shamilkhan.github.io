import React from 'react';
import rocket from '../img/communityRocket.png';
import comment from '../img/comment.png';

function Community() {
    return(
        <div id="community">
            <h2 className = "h2-white">
                Community
            </h2>
            <a href="#">
                <img src = {rocket} alt="" id = "community__rocket"/>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src = {comment} alt="" id = "community__comment-1"/>
                    </div>
                
                    <div className="col-md-4 offset-md-4 offset-lg-2" >
                        <img src = {comment} alt="" id = "community__comment-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;