import React, { Component } from 'react';
import '../App.css';
import './About.css';
import {
withScriptjs,
withGoogleMap,
GoogleMap,
Marker,
} from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 38.8383862, lng: -77.2788403 }}
  >


  </GoogleMap>
));

class About extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px'}}>
      <header className="App-header">

          <h1 className="App-title">{"Nightmare  on  Conservation  Drive"}</h1>


      </header>
      <div className="row" style={{padding:'20px'}}>
        <div className="col-sm-6" style={{width:'50%', height:'50%', float:'right'}}>
          <h1> About the House </h1>
          <div style={{width:'100%', height:'100%', borderStyle:"solid", borderWidth:'3px', borderRadius:'10px', borderColor:"rgb(251, 128, 14)"}}>
          <p style={{paddingTop:'5px', paddingLeft:'15px', paddingRight:'15px'}}> {"Started in 2010, Kim got the idea to build a haunted house for her little brother Ryan."}
          {" Ryan annoyed Kim constantly with his endless pranks and jokes so Kim decided a haunted"}
           {" house would scare Ryan so much he would agree to stop bugging Kim."}
           </p>

           <h3 style={{paddingTop:'10px', paddingLeft:'15px', paddingRight:'15px'}}> {"Dates to come see us"} </h3>
           <p style={{padding:'15px', textAlign:'center'}}>{"10/29/17,  10/30/17,  10/31/17" }</p>



          </div>

        </div>
        <div className="col-sm-6" style={{width:'45%', height:'50%'}}>
        <h1 className=""> {"Where to find us... if you dare"} </h1>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default About;
