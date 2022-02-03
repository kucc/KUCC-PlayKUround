import React, { useEffect, useState } from 'react';
import { NaverMap } from 'react-naver-map-ts';
import { useQuery } from 'react-query';

import { getByLocationAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

import BookMarker from '../../../assets/icons/marker-book.svg';

const Map = () => {
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const { data: places } = useQuery(['user', latitude, longitude], getByLocationAPI);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (places && latitude && longitude) {
      let map = null;
      const initMap = () => {
        const map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(latitude, longitude),
          zoom: 13,
        });
        // 장소 마커 생성
        places.map((place: PlaceType) => {
          // 장소 마커
          const marker = new naver.maps.Marker({
            map: map,
            title: place.place_Name,
            position: new naver.maps.LatLng(place.address_location[0], place.address_location[1]),
            icon: {
              // 장소의 종류에 따라 다른 icon 출력하기
              content: `
              <div style="display:grid; place-items:center;">
                <img alt="marker" src="/marker-book.svg" />
                <div>${place.place_Name}<div/>
              </div>
                `,
            },
          });
          // 정보창
          const infoWindow = new naver.maps.InfoWindow({
            content: `<div style="width:200px; text-align:center; padding:10px;">${place.address_exact}</div>`,
          });
        });
      };
      initMap();
    }
  }, [places, latitude, longitude]);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: '80%',
    height: '600px',
  };

  return (
    <React.Fragment>
      <h1>지도</h1>
      <div id='map' style={mapStyle}></div>
    </React.Fragment>
  );
};

export default Map;
