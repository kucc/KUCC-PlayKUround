import React, { useState } from 'react';

import { default as Configuration } from '@assets/icons/myconfiguration.svg';
import { default as Global } from '@assets/icons/myglobal.svg';
import { default as MyHome } from '@assets/icons/myhome.svg';
import { default as MyInfo } from '@assets/icons/myinfo.svg';
import { default as Post } from '@assets/icons/mypost.svg';
import { default as Recommend } from '@assets/icons/myrecommend.svg';

import { StartMenuWrapper } from './styled';
import {BaseMenu}from '@components';

export const StartMenu = ({clicked}:BaseMenuProps)=> {
  const [isClicked, setIsClicked] = useState<boolean>(clicked || false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  const menuList = [
    {label:"홈",
      icon:<MyHome />,
      clicked:false,
      height:22,
      width:20,
      onClick:handleClick(),
      },
      {label:"실시간 핫플레이스",
      icon:<Global />,
      clicked:true,
      height:22,
      width:22,
      onClick:handleClick()},
      {label:"게시물 작성",
      icon:<Post />,
      clicked:false,
      height=22,
      width=22,
      onClick=handleClick()
      },
      {label:"코스 추천",
      icon:<Recommend />,
      clicked:false,
      height:20,
      width:20,
      onClick: handleClick()},
      {label:"내 정보",
      icon:<MyInfo />,
      clicked:false,
      height:22,
      width:20,
      onClick:handleClick()},
      {
      label:"환경 설정",
      icon:<Configuration />,
      clicked:false,
      height:24,
      width:24,
      onClick:handleClick()
      }
  ]
  return (

    <StartMenuElementWrapper onClick={handleClick} clicked={clicked}>

    {menuList.map(({label, icon, height, width,clicked}) => {
    return(
      <>
      <StartMenuIconWrapper width={width} height={height} clicked={clicked}>
        {icon}
      </StartMenuIconWrapper>
      <StartMenuLabelWrapper >{label}</StartMenuLabelWrapper>
      </>
    )})}
   </StartMenuElementWrapper>

  )
}

