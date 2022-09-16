import { Loader } from '@googlemaps/js-api-loader';
import { useRef, useEffect } from 'react';

const Map = ({ transformAndSetData, setCenter, setZoom }) => {
  /* Ref to the map div */
  const mapRef = useRef(null);

  /* Ref to make sure not loading map multiple times */
  const executedRef = useRef(false);

  useEffect(() => {
    /* if map is alredy fetched, return */
    if (executedRef.current) { return; }
    
    console.log('fetching maps...');

    const init = async () => {

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
        version: "weekly",
        libraries: ['drawing']
      });

      const mapOptions = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 8
      };

      const google = await loader.load();
      const m = new google.maps.Map(mapRef.current, mapOptions);

      /* drawing polygon on map */

      const plotCoords = [
        { lat: 6.992803487834787, lng: 24.96373752835901 },
        { lat: 5.157546269538423, lng: 26.39196018460901 },
        { lat: 5.35446858695379, lng: 23.22789768460901 },
      ];

      const polygon = new google.maps.Polygon({
        paths: plotCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      });

      polygon.setMap(m);

      const coordsTwo = [
        { lat: 4.984604797851397, lng: 23.186063373850146 },
        { lat: 4.754724849418322, lng: 26.459989155100143 },
        { lat: 3.428797468216138, lng: 26.449002826975143 },
        { lat: 3.6152122115933114, lng: 22.999295795725146 },
      ];

      const polygon2 = new google.maps.Polygon({
        paths: coordsTwo,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      });

      polygon2.setMap(m);

      const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYLINE,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYLINE
          ]
        },
        polylineOptions: {
          editable: false,
          draggable: false,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 3,
        },
        
      });

      drawingManager.setMap(m);


    };

    init();
    executedRef.current = true;

  }, [transformAndSetData, setCenter, setZoom])
  

  return (
    <section className=''>
      <div className="">
        <div id='map' ref={mapRef} style={{ height: '100vh' }}/>
      </div>
    </section>
  );
};

export default Map;