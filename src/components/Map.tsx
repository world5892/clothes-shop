// import { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css'; // prevents rendering two maps
import '../css/components/Map.css';

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN!;

function Map() {
  // const lng = 20.2598;
  // const lat = 51.76296;
  // const zoom = 16;

  // useEffect(() => {
  //   // Create a map
  //   const map = new mapboxgl.Map({
  //     container: 'map__content',
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom,
  //   });

  //   // Add a marker to the map
  //   new mapboxgl.Marker({
  //     color: '#6e4275',
  //   })
  //     .setLngLat([lng, lat])
  //     .addTo(map);

  //   // Add zoom and rotation controls to the map.
  //   map.addControl(new mapboxgl.NavigationControl());

  //   // Zoom only while scrolling and pressing Alt key
  //   map.on('wheel', (e) => {
  //     if (e.originalEvent.altKey) {
  //       map.scrollZoom.enable();
  //     } else {
  //       map.scrollZoom.disable();
  //     }
  //   });
  // }, []);

  return (
    <div className="map">
      {/* todo: div to remove */}
      <div id="map__content">Miejsce na mapę</div>
      <div className="map__overlay">Naciśnij Alt podczas przewijania, aby przybliżyć mapę</div>
    </div>
  );
}

export default Map;
