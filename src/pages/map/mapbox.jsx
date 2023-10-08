import React, { useState, memo, useEffect } from "react";
import "./mapbox.css";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";

import pin from "../../assets/img/black pin.png";

export const MapBox = memo(() => {
  const currentCoords = JSON.parse(localStorage.getItem("coords"));
  const center = currentCoords || [41.002534933524345, 71.67760873138532];
  const [clickedCoordinates, setClickedCoordinates] = useState(
    currentCoords || ""
  );

  const handleMapClick = async (e) => {
    const coordinates = e.get("coords");
    setClickedCoordinates(coordinates);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      localStorage.setItem("coords", JSON.stringify([latitude, longitude]));
    });
  }, []);

  return (
    <YMaps>
      <div className="map_box">
        My awesome application with maps!{" "}
        <span>{clickedCoordinates && clickedCoordinates?.join(", ")}</span>
        <Map
          defaultState={{
            center: center,
            zoom: 17,
            controls: [],
          }}
          instanceRef={(ref) => {
            if (ref) {
              ref?.behaviors?.disable(["scrollZoom"]);
            }
          }}
          onClick={handleMapClick}
          className="map_item"
        >
          <Placemark
            geometry={[...clickedCoordinates]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [40, 40],
              iconImageHref: pin,
            }}
          />

          <Polyline
            geometry={[
              [40.96299228337921, 71.68732205954962],
              [40.96481401312289, 71.63891355124882],
              [40.98615050219515, 71.59908811179571],
              [41.00383890153776, 71.58363858786991],
              [41.01502174453666, 71.60698453513555],
              [41.02360262929261, 71.62140409079963],
              [41.026722671736955, 71.64818326560429],
              [41.03036253299224, 71.67667905417852],
              [41.02647370232431, 71.7070343147112],
              [41.00766595223621, 71.71002735729287],
              [40.99447505056397, 71.70483151999882],
              [40.97782489477923, 71.71204129783082],
              [40.96160154909337, 71.6880053606493],
              [40.96299228337921, 71.68732205954962],
            ]}
            options={{
              balloonCloseButton: false,
              strokeColor: "#ff0000",
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
});
