import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import { useMapEvents } from 'react-leaflet/hooks'
import country from '../shapefiles/country.json';
import state from '../shapefiles/state.json';
import * as L from "leaflet";
import District from '../shapefiles/District.json';
import local from '../shapefiles/local.json';


const Map = () => {
    const geoJsonLayer = useRef(null);
    let cordinates = [14.716, -14.467]
    // const [show,setShow] = useState(true);
    let show = country;
    function MyComponent() {
        const map = useMapEvents({
            click: () => {
                map.locate()
            },
            locationfound: (location) => {
                console.log('location found:', location)
            },
        })
        return null
    }
    // function MyComponent() {
    //     const map = useMap();
    //     console.log('map center:', map.getCenter())
    //     return null
    //   }

    //   const clicked = () => {
    //         show=false;
    //         console.log(show);
    //     }

    function handleEachFeature(feature, layer) {
        layer.on("click", L.bind(handleClick, null, layer));
    }

    function handleClick(layer) {
        // cordinates=[20.593 ,78.962];
        console.log('qwe')
        // const bounds = layer.getBounds();
        // console.log(bounds);
    }
    return (
        <MapContainer center={cordinates} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <GeoJSON id={Math.random()} data={country} /> */}

            {show ? <GeoJSON key={Math.random()} data={show} onEachFeature={handleEachFeature} /> : <GeoJSON data={District} />}

            <MyComponent />
            {/* <GeoJSON data={show ? state : District} eventHandlers={{ click: () => { show = false; console.log(show) } }} /> */}
        </MapContainer>
    )
}

export default Map