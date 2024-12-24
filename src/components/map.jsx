'use client';
import React from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '15px 15px 15px 15px',
};

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

const defaultMapZoom = 18;
const defaultMapCenter = {
    lat: 25.434910,
    lng: 55.520660,
};

const Map = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                <Marker position={defaultMapCenter} />
            </GoogleMap>
        </div>
    );
}

export default Map;
