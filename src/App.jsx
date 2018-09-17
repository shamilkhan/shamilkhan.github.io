import React, { Component } from 'react';
import './App.css';
import sun from './img/sun.png';
import WeatherLogo from './components/WeatherLogo.jsx';
import City from "./components/City.jsx";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      city : "",
      temprature: "",
      rain: "",
      snow: "",
      loading : true,
      currentWeater: "",
      time: ""
    } 
  }

  componentWillMount() {
    this.fetchIP();
  }


  fetchWeater = city => {
      const baseUrl = 'http://api.openweathermap.org';
      const path = '/data/2.5/find?q=';
      const appID = 'eeea069c51e2b51d7825d431ce394143';
      const query = `&type=like&APPID=${appID}`;
      console.log("Начало получения данных о погоде");
      fetch(`${baseUrl}${path}${city}${query}`)
        .then(response => response.json())
        .then(data => {
              this.setState({
                city,
                temprature: Math.round(data.list[0].main.temp - 273),
                rain: data.list[0].rain,
                snow: data.list[0].snow,
                currentWeater: this.getCurentWeather(),
                loading: false,
              });
              console.log(this.state);
        })
        .catch(message => console.log(message));
  }

 
  fetchIP = () => {
       console.log("Начало получения данных о городе");
      return fetch("https://timezoneapi.io/api/ip")
        .then(res => res.json())
        .then(data => {
          this.setState({time: data.data.datetime.hour_24_wolz})
          this.fetchWeater(data.data.city);
        })
        .catch(error => console.log(error));
  }



  getCurentWeather = () => {
    if ((this.state.time > 0 && this.state.time < 7) || (this.state.time > 21)) return "moon"
    if (this.state.rain != "") return "rain";
    if (this.state.snow != "") return "snow";
    return "sunny";
  }


  render() {
    const {city, temprature, loading, currentWeater} = this.state;
    return loading ? (
    <div className = "wrapper">
      <div className="loading">
      </div>
    </div>)
        : (
        <div className = "wrapper">
            <WeatherLogo name = {currentWeater}/>
            <City city = {city} temprature = {temprature} name = {currentWeater}/>
            {console.log(city, 1)}
        </div>
    );
  }
}

export default App;
