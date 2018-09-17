import React, { Component } from 'react';


class City extends Component {
    constructor(props){
        super(props);
        this.state ={
            city : props.city,
            temprature : props.temprature,
            name: props.name
        }   
    }

    getTempratureColor(){
        if (this.state.temprature <= 0)
            return "temp__blue";
        return "temp__red";
    }
    render(){
        return(
            <div>
                <div className ="city">{this.state.city}</div>
                <div className = {"temp temp__" + this.state.name}>{this.state.temprature}°C</div>
            </div>
        )
    }
}

export default City;