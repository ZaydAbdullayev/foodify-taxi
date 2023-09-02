import React, { useState } from "react";
import "./home.css";
import { YMaps, Map, ObjectManager, Placemark } from "@pbe/react-yandex-maps";

export const Home = () => {
  const [clickedCoordinates, setClickedCoordinates] = useState(null);
  const center = [55.76, 37.64];

  const handleMapClick = (e) => {
    const coordinates = e.get("coords");
    setClickedCoordinates(coordinates);
  };

  const images = [...Array(26)].map((n, i) => {
    const letter = String?.fromCharCode(i + 97);
    return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
  });

  return (
    <YMaps>
      <div className="map_box">
        My awesome application with maps!{" "}
        <span>{clickedCoordinates?.join(", ")}</span>
        <Map
          defaultState={{
            center,
            zoom: 10,
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
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 32,
            }}
            objects={{
              openBalloonOnClick: true,
              preset: "islands#greenDotIcon",
            }}
            clusters={{
              preset: "islands#redClusterIcons",
            }}
          >
            {images?.map((n) => (
              <Placemark
                key={n}
                geometry={center?.map((c) => c + (Math.random() - 0.5))}
                options={{
                  iconLayout: "default#image",
                  iconImageSize: [50, 50],
                  iconImageHref: n,
                }}
              />
            ))}
          </ObjectManager>
        </Map>
      </div>
    </YMaps>
  );
};
