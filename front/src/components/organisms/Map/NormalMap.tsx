import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getByLocationAPI } from 'apis/place';
import { PlaceType } from 'interfaces/place';

const NormalMap = ({
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
            //text left의 계산법 : - text의 width / 2 + img의 width / 2
            content: `
                      <img 
                        src="icons/my-location.svg" 
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
            scaledSize: new naver.maps.Size(30, 30),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(15, 30),
          },
        });

        // course White 아이콘
        const courseWhiteBtnHtml: any =
          '<img style="position: absolute; top: 71px; left: 16px" alt="course-white" src="icons/course-white.svg">';

        // 현재 위치 아이콘 => svg 파일 수정해야 함!
        const locationBtnHtml: any =
          '<img style="position: absolute; top: 23px; left: 16px" alt="get-location" src="icons/get-location.svg">';

        naver.maps.Event.once(map, 'init_stylemap', function () {
          //customControl 객체 이용하기
          const courseButton = new naver.maps.CustomControl(courseWhiteBtnHtml, {
            position: naver.maps.Position.TOP_LEFT,
          });

          //customControl 객체 이용하기
          var locationButton = new naver.maps.CustomControl(locationBtnHtml, {
            position: naver.maps.Position.TOP_LEFT,
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
              title: place.place_Name,
              position: new naver.maps.LatLng(place.address_location[0], place.address_location[1]),
              icon: {
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: `
                          <img 
                            src="icons/marker-book.svg" 
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
              content:
                place.picture_link.length > 0
                  ? `
                  <div>
                    <div style="position: absolute; bottom: 10px; right: 12px; font-size: 10px; display: flex; align-items: center; color: white; z-index:10;">
                      <div style="margin-top: 3.2px;">자세히 보기&nbsp;&nbsp;</div>
                      <img src="icons/place-detail-white.svg"  />
                    </div>
                    <div style="width:120px; height:120px; margin:5px; border-radius: 15px; background-color: black;">
                      <img style="width:120px; height:120px; border-radius: 15px;object-fit: cover; opacity: 0.8;" src="pictures/${place.picture_link[0]}" />
                    </div>
                  </div>`
                  : `
                  <div>
                    <div style="position: absolute; bottom: 10px; right: 12px; font-size: 10px; display: flex; align-items: center;">
                      <div style="margin-top: 3.2px;">자세히 보기&nbsp;&nbsp;</div>
                      <img src="icons/place-detail-black.svg" />
                    </div>
                    <img src="icons/no-image.svg" style="width:120px; padding:5px; border-radius: 15px;" />
                  </div>
                  `,
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
              marker.setIcon({
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: `
                          <img 
                            src="icons/marker-book.svg" 
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
                            ${title}
                          <div/>`,
                size: new naver.maps.Size(22, 35),
                anchor: new naver.maps.Point(11, 35),
              });
            });

            // info window 열기-닫기 설정
            if (infoWindow.getMap()) {
              infoWindow.close();
            } else {
              const title = markers[key].getTitle();
              markers[key].setIcon({
                //text left의 계산법 : - text의 width / 2 + img의 width / 2
                content: `
                          <img 
                            src="icons/marker-book.svg" 
                            alt="marker-book"
                            style="
                              position: absolute; 
                              width: 33px; 
                              height: 52.5px; 
                              left: 0px; 
                              top: 0px;
                          ">
                          <div 
                            style="
                              position: absolute; 
                              width: 60px; 
                              left: -13.5px;
                              text-align : center;
                              line-height: 100%;
                              top: 58px;
                            "
                          >
                            ${title}
                          <div/>`,
                size: new naver.maps.Size(33, 52.5),
                anchor: new naver.maps.Point(16.5, 52.5),
              });
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
      <div id='map' style={mapStyle}></div>
    </React.Fragment>
  );
};

export default NormalMap;
