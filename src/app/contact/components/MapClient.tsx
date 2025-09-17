"use client";

import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    LayersControl,
    Circle,
    Polygon,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default icon in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const { BaseLayer, Overlay } = LayersControl;

export default function MapClient() {
    return (
        <MapContainer
            center={[25.7465, 89.2756]}
            zoom={15}
            scrollWheelZoom={true}
            className="w-full h-96 rounded-2xl shadow-xl z-0"
        >
            <LayersControl position="topright">
                {/* ==== Base Layers (different map styles) ==== */}
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>

                <BaseLayer name="Carto Light">
                    <TileLayer
                        attribution='&copy; <a href="https://www.carto.com/">Carto</a>'
                        url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
                    />
                </BaseLayer>

                <BaseLayer name="Carto Dark">
                    <TileLayer
                        attribution='&copy; <a href="https://www.carto.com/">Carto</a>'
                        url="https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png"
                    />
                </BaseLayer>

                {/* ==== Overlays ==== */}
                <Overlay checked name="College Marker">
                    <Marker position={[25.7465, 89.2756]}>
                        <Popup>
                            <span className="font-bold text-blue-600 dark:text-blue-400">
                                Rangpur Medical College
                            </span>
                            <br />
                            Rangpur, Bangladesh
                        </Popup>
                    </Marker>
                </Overlay>

                <Overlay name="Service Area">
                    <Circle
                        center={[25.7465, 89.2756]}
                        radius={1200}
                        color="blue"
                        fillColor="blue"
                        fillOpacity={0.2}
                    />
                </Overlay>

                <Overlay name="Campus Boundary">
                    <Polygon
                        positions={[
                            [25.748, 89.274],
                            [25.745, 89.276],
                            [25.747, 89.278],
                        ]}
                        color="green"
                    />
                </Overlay>
            </LayersControl>
        </MapContainer>
    );
}
