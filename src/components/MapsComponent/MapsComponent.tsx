import React, { useState, FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


export const MapsComponent: FunctionComponent<any> = (props) => {
  const mapOptions = (maps: any) =>{
    return{
      options: {
      gestureHandling: 'greedy'
      }
      
    }
  }
  const [center, setCenter] = useState({ lat: 39.809860, lng: -98.555183 });
  const [zoom, setZoom] = useState(5);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCZ_tmnZtBU5d_NtsKqY00KJVJON8dBJNo' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={39.809860}
          lng={-98.555183}
          name="Center of the United States"
          color="blue"
        />
        <Marker
          lat={36.683720}
          lng={-101.475095}
          name="1. Inklahoma"
          color="red"
        />
        <Marker
          lat={36.031768}
          lng={-95.816370}
          name="2. Geek Ink"
          color="red"
        />
        <Marker
          lat={29.403823}
          lng={-98.630586}
          name="3. Nite Owl"
          color="red"
        />
        <Marker
          lat={36.095420}
          lng={-95.886098}
          name="4. Toxic Monkey"
          color="red"
        />
        <Marker
          lat={36.147512}
          lng={-95.942364}
          name="5. Anchor and Rose"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );
}

