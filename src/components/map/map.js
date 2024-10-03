"use client";
import 'leaflet/dist/leaflet.css';
import { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([41.31115, 69.27959], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([41.31115, 69.27959]).addTo(map)
      .bindPopup("Toshkent, O'zbekiston")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "173px", borderRadius: '30px', marginTop: '17px', maxWidth: '850px'}} />;
};

export default Map;
