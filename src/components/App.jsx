import React, { Component } from 'react';
import '../styles/main.sass';
import FirstGroup from './FirstGroup';
import ProjectDescription from './ProjectDescription';
import IcoInLive from './IcoInLive';
import Distribution from './Distribution';
import SecondGroup from './SecondGroup';

class App extends Component {
  render() {
    return (
      <div >
         <FirstGroup/>
         <IcoInLive/>
         <ProjectDescription/>
         <Distribution/>
         <SecondGroup/>
      </div>
    );
  }
}

export default App;
