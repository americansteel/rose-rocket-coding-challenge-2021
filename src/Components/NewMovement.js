import React, { useState, useEffect } from "react";

const NewMovement = (props) => {
  return (
    <div>
      <form onSubmit={props.addMarker}>
        <div>
           Freight Description:
          <input value={props.newMarkerDescription}
        onChange = {props.handleDescriptionChange} />
        </div>
        <div>
          Start Point Latitude:
          <input value={props.newStartLat}
          onChange = {props.handleStartLatChange}  />
        </div>
        <div>
          Start Point Longitude
          <input value={props.newStartLng} 
          onChange = {props.handleStartLngChange} />
        </div>
        <div>
          End Point Latitude:
          <input value={props.newEndLat}
          onChange = {props.handleEndLatChange}  />
        </div>
        <div>
          Start Point Longitude
          <input value={props.newEndLng} 
          onChange = {props.handleEndLngChange} />
        </div>
        <div>
          <button type="submit">Add Marker</button>
        </div>
      </form>
    </div>
  );
};

export default NewMovement;
