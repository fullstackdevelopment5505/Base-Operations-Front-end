import React, { useRef } from "react";
import { Marker, Popup } from "react-leaflet"

const UserMarker = ({ children, position }) => {
    const markerRef = useRef();

    return (
        <Marker
            position={position}
            ref={markerRef}
        >
            <Popup>
                {children}
            </Popup>
        </Marker>
    )
}

export default UserMarker