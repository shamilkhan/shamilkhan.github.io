import React from 'react';
import star from '../img/star.png';

function RoadMapItem(props) {
    var {date, text, reverse} = props;
    return (
            reverse ?
                (<div className="row">
                    <div className="roadmap__date col-sm-1 order-sm-last  align-self-center ">
                        {date}
                    </div>
                    <div className="col-sm-2 align-self-center">
                        <div className="flex-center-center">
                            <img src={star} alt=""/>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-3 order-sm-first offset-lg-2 align-self-center">
                        <div className="roadmap flex-center-center">
                            <div className = "roadmap__item text-center">
                                {text}
                            </div>
                        </div>
                    </div>
                </div>) :

                (<div className="row">
                    <div className="roadmap__date col-sm-1 offset-sm-4 align-self-center ">
                        {date}
                    </div>
                    <div className="col-sm-2 align-self-center">
                        <div className="flex-center-center">
                            <img src={star} alt=""/>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-3 align-self-center">
                        <div className="roadmap flex-center-center">
                            <div className = "roadmap__item text-center">
                                {text}
                            </div>
                        </div>
                    </div>
                </div>)
    )
}

export default RoadMapItem