import React from 'react';

function Information() {
    return(
        <div id="information">
            <h2 className = "h2-white">
                Information
            </h2>
            <div className="container">
                <div className="row info__first__items">
                    <div className="col-md-3 offset-md-2 information__item flex-center-center">
                        <p>Idea</p>
                    </div>

                    <div className="col-md-3 offset-md-2 information__item flex-center-center">
                        <p>Token Tech List</p>
                    </div>
                </div>

                <div className="row info__second__items">
                    <div className="col-md-3 offset-md-2 information__item flex-center-center">
                        <p>Terms</p>
                    </div>
                    
                    <div className="col-md-3 offset-md-2 information__item flex-center-center">
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;