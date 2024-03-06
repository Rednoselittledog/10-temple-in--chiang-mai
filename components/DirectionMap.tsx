'use client'
import React, { useEffect, useState } from 'react';
import {APIProvider, Map, Marker, useMap, useMapsLibrary} from '@vis.gl/react-google-maps';
import { DirectionMapProps } from '@/types';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
  };

const DirectionMap = ({from, to}:DirectionMapProps) => {
    function Directions() {
        const map = useMap() 
        const routesLibrary = useMapsLibrary("routes");
        const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
        const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
        const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
      
        useEffect(() => {
          if (!routesLibrary || !map) return;
      
          setDirectionsService(new routesLibrary.DirectionsService());
          setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
        }, [routesLibrary, map]);
      
        useEffect(() => {
          if (!directionsService || !directionsRenderer) return;
      
          directionsService
            .route({
              origin: from,
              destination: to,
              travelMode: google.maps.TravelMode.DRIVING,
              provideRouteAlternatives: true,
            })
            .then((response) => {
              directionsRenderer.setDirections(response);
              setRoutes(response.routes);
            });
        }, [directionsService, directionsRenderer]);
      
        console.log(routes);
      
        return null;
      }

  return (
    <div className='w-full h-full'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}>
            <Map defaultCenter={center} defaultZoom={20}>
                <Directions/>
            </Map>
        </APIProvider>
    </div>
    
  );
};

export default DirectionMap;

