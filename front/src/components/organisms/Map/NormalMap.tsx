import React, { useEffect, useState } from 'react';

import {
  courseWhiteBtnIcon,
  locationBtnIcon,
  myLocationIcon,
  placeBigIcon,
  placeIcon,
  placeNoPicture,
  placePicture,
} from '@components/atoms/MapIcons';

import { PlaceType } from 'interfaces/place';

import { updateMarkers } from './commonElement';

const CourseMap = ({
  setCourseMode,
  places,
}: {
  setCourseMode: () => void;
  places: PlaceType[];
}) => {
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (places) {
      const initMap = () => {
        // 지도 생성
        const map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(latitude, longitude),
          zoom: 13,
        });

        // 현재 위치 표시
        new naver.maps.Marker({
          map: map,
          title: 'current_Location',
          position: new naver.maps.LatLng(latitude, longitude),
          icon: {
            content: myLocationIcon,
            size: new naver.maps.Size(30, 30),
            scaledSize: new naver.maps.Size(30, 30),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(15, 30),
          },
        });

        naver.maps.Event.once(map, 'init_stylemap', function () {
          //customControl 객체 이용하기
          const courseButton = new naver.maps.CustomControl(courseWhiteBtnIcon, {
            position: naver.maps.Position.TOP_RIGHT,
          });

          //customControl 객체 이용하기
          var locationButton = new naver.maps.CustomControl(locationBtnIcon, {
            position: naver.maps.Position.TOP_RIGHT,
          });

          courseButton.setMap(map);
          locationButton.setMap(map);

          naver.maps.Event.addDOMListener(courseButton.getElement(), 'click', function () {
            setCourseMode();
          });

          naver.maps.Event.addDOMListener(locationButton.getElement(), 'click', function () {
            getLocation();
            map.setCenter(new naver.maps.LatLng(latitude, longitude));
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
                size: new naver.maps.Size(22, 35),
                anchor: new naver.maps.Point(11, 35),
              },
            }),
          );

          // 정보창
          infoWindows.push(
            new naver.maps.InfoWindow({
              content:
                place.pictureLink && place.pictureLink.length > 0
                  ? placePicture(place.pictureLink[0])
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
                size: new naver.maps.Size(26, 32),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(13, 32),
              });
            });

            // info window 열기-닫기 설정
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              // 애니메이션이 너무 별로다..
              // markers[key].setAnimation(2);
              const title = markers[key].getTitle();
              const [placeName, placeCategory] = title.split('_');
              markers[key].setIcon({
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: placeBigIcon(placeName, placeCategory),
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
  }, [places, latitude, longitude]);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: '100%',
    height: '600px',
  };

  return (
    <React.Fragment>
      <div id='map' style={mapStyle}></div>
    </React.Fragment>
  );
};

export default CourseMap;
