import React, { Component } from 'react';


//Переписать в функци комп
class WeatherLogo extends Component {
    constructor(props){
        super(props);
        this.state = {
            weatherLogoClass : props.name
        }
    }
    render() {
        return(
            <div className = {"logo logo__" + this.state.weatherLogoClass}></div>
        )
    }
}


export default WeatherLogo;