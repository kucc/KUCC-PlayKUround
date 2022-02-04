import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getByLocationAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

const Map = () => {
  const [latitude, setLatitude] = useState<number>(37.5908);
  const [longitude, setLongitude] = useState<number>(127.0278);
  const { data: places } = useQuery(['user', latitude, longitude], getByLocationAPI);

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
            //text left의 계산법 : - text의 width / 2 + img의 width / 2
            content: `
                      <img 
                        src="/my-location.svg" 
                        alt="my-location"
                        style="
                          position: absolute; 
                          left: 0px; 
                          top: 0px;
                          width: 30px;
                          height: 30px;
                      ">
                      `,
            size: new naver.maps.Size(30, 30),
            anchor: new naver.maps.Point(15, 30),
          },
        });

        // course 아이콘
        const courseBtnHtml: any =
          '<img style="position: absolute; top: 71px; left: 16px" alt="course" src="/course.svg">';

        naver.maps.Event.once(map, 'init_stylemap', function () {
          //customControl 객체 이용하기
          var customControl = new naver.maps.CustomControl(courseBtnHtml, {
            position: naver.maps.Position.TOP_LEFT,
          });

          customControl.setMap(map);

          naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
            // course 함수 넣어주기
          });
        });

        // 현재 위치 아이콘 => svg 파일 수정해야 함!
        const locationBtnHtml: any =
          '<img style="position: absolute; top: 23px; left: 16px" alt="get-location" src="/get-location.svg">';

        naver.maps.Event.once(map, 'init_stylemap', function () {
          //customControl 객체 이용하기
          var customControl = new naver.maps.CustomControl(locationBtnHtml, {
            position: naver.maps.Position.TOP_LEFT,
          });

          customControl.setMap(map);

          naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
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
              title: place.place_Name,
              position: new naver.maps.LatLng(place.address_location[0], place.address_location[1]),
              icon: {
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: `
                          <img 
                            src="/marker-book.svg" 
                            alt="marker-book"
                            style="
                              position: absolute; 
                              width: 22px; 
                              height: 35px; 
                              left: 0px; 
                              top: 0px;
                          ">
                          <div 
                            style="
                              position: absolute; 
                              width: 60px; 
                              left: -19px;
                              text-align : center;
                              line-height: 100%;
                              top: 40px;
                            "
                          >
                            ${place.place_Name}
                          <div/>`,
                size: new naver.maps.Size(22, 35),
                anchor: new naver.maps.Point(11, 35),
              },
            }),
          );
          // 정보창
          infoWindows.push(
            new naver.maps.InfoWindow({
              content: `<div style="width:200px; text-align:center; padding:10px;">${place.address_exact}</div>`,
            }),
          );
        });
        // 정보창 이벤트 리스너
        infoWindows.map((infoWindow, key) => {
          naver.maps.Event.addListener(markers[key], 'click', function (e) {
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              infoWindow.open(map, markers[key]);
            }
          });
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
      <h1>지도</h1>
      <div id='map' style={mapStyle}></div>
    </React.Fragment>
  );
};

export default Map;
