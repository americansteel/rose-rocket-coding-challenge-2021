import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import NewMovement from './NewMovement';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};

//initial load data for testing

const initialMovements = [
    {
        description: 'Bike Parts',
        startMarker: 
         { startLat: 43.64267487207443 , 
          startLng:-79.39248399806515 
         },
        endMarker: {
          endLat: 25,
          endLng: 25
        }
    }
]
const MapContainer = (props) => {

//set state
const [movements, setMovement] = useState([])
const [newMarkerDescription, setNewMarkerDescription] = useState('')
const [newStartLat, setNewStartLat] = useState('')
const [newStartLng, setNewStartLng] = useState('')
const [newEndLat, setNewEndLat] = useState('')
const [newEndLng, setNewEndLng] = useState('')

//Input change handlers
const handleDescriptionChange = (event) => {
  console.log(event.target.value)
  setNewMarkerDescription(event.target.value
}

const handleStartLatChange= (event) => {
  console.log(event.target.value)
  setNewStartLat(event.target.value)
}
const handleStartLngChange= (event) => {
  console.log(event.target.value)
  setNewStartLng(event.target.value)
}

const handleEndLatChange= (event) => {
  console.log(event.target.value)
  setNewEndLat(event.target.value)
}

const handleEndLngChange= (event) => {
  console.log(event.target.value)
  setNewEndLng(event.target.value)
}

//Add marker to state
const addMovement = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const movementObject = {
        description: newMarkerDescription,
        startLat: newStartLat, 
        startLng: newStartLng,
        endLat: newEndLat,
        endLng: newEndLng
    }
    
    setMovement(movements.concat(movementObject))
    setNewStartLat('')
    setNewStartLng('')
    setNewEndLat('')
    setNewEndLng('')
}

//sets initial load data into state
useEffect (() => { setMovement(initialMovements)}, [])

    return (
      <div className="app">
        <div className="sidebar">
          <div>
            <Popup
              trigger={<button>Create New Movement</button>}
            >
              <NewMovement
              addMovement = {addMovement}
              newMarkerDescription = {newMarkerDescription}
              newStartLat = {newStartLat}
              newStartLng = {newStartLng}
              newEndLat = {newEndLat}
              newEndLng = {newEndLng}
              handleDescriptionChange = {handleDescriptionChange}
              handleStartLatChange = {handleStartLatChange} 
              handleStartLngChange = {handleStartLngChange}
              handleEndLatChange = {handleEndLngChange}
              handleEndLngChange = {handleEndLngChange}
              />
            </Popup>
          </div>
        </div>
        <div className="map-container">
          <Map
            google={props.google}
            
            style={mapStyles}
            initialCenter={{
              lat: 43.64745,
              lng: -79.37371,
            }}
          >
          {movements.map(marker => <Marker name = {movements.description} position = {{lat: marker.lat, lng: marker.lng}}
          />)}
          
          </Map>
        </div>
      </div>
    );
  
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
