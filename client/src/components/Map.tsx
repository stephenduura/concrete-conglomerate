import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    L?: any;
  }
}

function loadLeaflet(): Promise<any> {
  return new Promise((resolve) => {
    if (window.L) {
      resolve(window.L);
      return;
    }

    // Load Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.crossOrigin = "";
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.crossOrigin = "";
    script.onload = () => {
      resolve(window.L);
    };
    script.onerror = () => {
      console.error("Failed to load Leaflet JS script");
    };
    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
  initialCenter = { lat: 5.5279153, lng: 5.7734727 }, // Default Warri HQ coordinates
  initialZoom = 14,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const initMap = usePersistFn(async () => {
    const L = await loadLeaflet();
    if (!mapContainer.current) {
      console.error("Map container not found");
      return;
    }

    if (!mapInstanceRef.current) {
      // Initialize map instance
      mapInstanceRef.current = L.map(mapContainer.current, {
        zoomControl: true,
        attributionControl: true,
      }).setView([initialCenter.lat, initialCenter.lng], initialZoom);

      // Add CartoDB Dark Matter tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(mapInstanceRef.current);

      if (onMapReady) {
        onMapReady(mapInstanceRef.current);
      }
    }
  });

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      ref={mapContainer}
      className={cn("w-full h-[500px] bg-[#1a1a1a]", className)}
    />
  );
}
