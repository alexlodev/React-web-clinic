import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 9.952555, lng: -84.188763 }}
        defaultZoom={17}
      >
        <Marker
          position={{ lat: 9.952555, lng: -84.188763 }}
          // onClick={{ }}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{
                height: `500px`,
                width: "100%",
                maxWidth: "500px",
                minWidth: "300px"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
