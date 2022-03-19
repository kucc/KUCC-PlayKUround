import React, { useEffect, useState } from 'react';

import {
  courseRedBtnIcon,
  locationBtnIcon,
  myLocationIcon,
  placeBigIcon,
  placeIcon,
  placeNoPicture,
  placePicture,
} from '@components';

import { PlaceType } from 'interfaces';

import { updateMarkers } from './commonElement';

const CourseMap = ({
  latitude,
  longitude,
  setCourseMode,
  places,
}: {
  latitude: number;
  longitude: number;
  setCourseMode: () => void;
  places: PlaceType[];
}) => {
  const [mapLatitude, setMapLatitude] = useState<number>(latitude);
  const [mapLongitude, setMapLongitude] = useState<number>(longitude);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      setMapLatitude(pos.coords.latitude);
      setMapLongitude(pos.coords.longitude);
    });
  };

  useEffect(() => {
    if (places) {
      const initMap = () => {
        // 지도 생성
        const map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(mapLatitude, mapLongitude),
          zoom: 13,
        });

        // 현재 위치 표시
        new naver.maps.Marker({
          map: map,
          title: 'current_Location',
          position: new naver.maps.LatLng(mapLatitude, mapLongitude),
          icon: {
            //text left의 계산법 : - text의 width / 2 + img의 width / 2
            content: myLocationIcon,
            size: new naver.maps.Size(30, 30),
            scaledSize: new naver.maps.Size(30, 30),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(15, 30),
          },
        });

        naver.maps.Event.once(map, 'init_stylemap', function () {
          //customControl 객체 이용하기
          const courseButton = new naver.maps.CustomControl(courseRedBtnIcon, {
            position: naver.maps.Position.TOP_LEFT,
          });

          //customControl 객체 이용하기
          var locationButton = new naver.maps.CustomControl(locationBtnIcon, {
            position: naver.maps.Position.TOP_LEFT,
          });

          courseButton.setMap(map);
          locationButton.setMap(map);

          naver.maps.Event.addDOMListener(courseButton.getElement(), 'click', function () {
            setCourseMode();
          });

          naver.maps.Event.addDOMListener(locationButton.getElement(), 'click', function () {
            getLocation();
            map.setCenter(new naver.maps.LatLng(mapLatitude, mapLongitude));
          });
        });

        const markers: any[] = [];
        const infoWindows: any[] = [];
        // 장소 마커 생성
        places.map((place: PlaceType) => {
          // 장소 마커
          markers.push(
            new naver.maps.Marker({
              map: map,
              title: place.placeName + '_' + 'marker-book',
              position: new naver.maps.LatLng(place.addressLocation[0], place.addressLocation[1]),
              icon: {
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                // marker-book에다 장소 넣어주기
                content: placeIcon(place.placeName, 'marker-book'),
                size: new naver.maps.Size(26, 32),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(13, 32),
              },
            }),
          );

          // 정보창
          infoWindows.push(
            new naver.maps.InfoWindow({
              content:
                place.images && place.images.length > 0
                  ? placePicture(place.images[0].source)
                  : placeNoPicture,
              // img 태그에 a 태그를 넣어 이동하게 하자.
              borderWidth: 1,
              borderColor: '#E4E4E4',
            }),
          );
        });
        // 정보창 이벤트 리스너
        infoWindows.map((infoWindow, key) => {
          naver.maps.Event.addListener(markers[key], 'click', function () {
            // 모든 marker의 크기를 원래 상태로
            markers.map(marker => {
              const title = marker.getTitle();
              const [placeName, placeCategory] = title.split('_');
              marker.setIcon({
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: placeIcon(placeName, placeCategory),
                size: new naver.maps.Size(22, 35),
                anchor: new naver.maps.Point(11, 35),
              });
            });

            // info window 열기-닫기 설정
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              const title = markers[key].getTitle();
              const [placeName, placeCategory] = title.split('_');
              markers[key].setIcon({
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: placeBigIcon(placeName, placeCategory),
                size: new naver.maps.Size(39, 48),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(19.5, 48),
              });
              infoWindow.open(map, markers[key]);
            }
          });
        });

        //보이는 지도 영역의 마커만 표시하기
        naver.maps.Event.addListener(map, 'idle', function () {
          updateMarkers(map, markers);
        });
      };
      initMap();
    }
  }, [places, mapLatitude, mapLongitude]);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: '100%',
    height: '600px',
  };

  return <div id='map' style={mapStyle} />;
};

export default CourseMap;
