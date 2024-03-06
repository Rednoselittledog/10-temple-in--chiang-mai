'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
  };

const StaticMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isLoaded: apiIsLoaded } = useJsApiLoader({
    googleMapsApiKey : 'AIzaSyCvgy6yyBCzoj6WAhChG5dtEJhtq5Tfbfc'
  });

  useEffect(() => {
    console.log(apiIsLoaded);
    if (!apiIsLoaded) return;

    setIsLoaded(true);
  }, [apiIsLoaded]);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        
      </GoogleMap>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default StaticMap;
