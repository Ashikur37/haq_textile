"use client"
import GoogleMapReact from 'google-map-react';
interface GoogleMapProps{
    className?:string
}
export default function GoogleMap({className}:GoogleMapProps) {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
   return  <div style={{ height: '50vh'}} className={className}>
   <GoogleMapReact
       bootstrapURLKeys={{ key: "" }}
       defaultCenter={defaultProps.center}
       defaultZoom={defaultProps.zoom}
       
   >

   </GoogleMapReact>
</div>
}