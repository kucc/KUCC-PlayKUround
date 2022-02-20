import React, { useState } from "react";
import { Navbar } from "..";
import { FullBar, RecommendCardList } from "@components";
import { MenuIcon } from "@styles";
import { ToggleDark } from "@components";
import { TextWrapper,RecommendTableWrapper } from "./styled";

export const RecommendTable = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const onClickMenuIcon = () => {
            return setVisible(!visible);
        };
    const leftItems = [{icon: <MenuIcon />,onClickLeftItems: onClickMenuIcon} ];
    const TextGroupList = [
        {description: '오늘 나는,고기가 먹고 싶다'},
        {description: '분위기를 내고 싶을때, 양식데이트'},
        {description: '오붓한 둘만의 데이트'},
        {description: '피자'},
        {description: '커피'},
        {description: '아이스크림'},
        {description: '짜장면'},
        {description: '찜닭'},
        {description: '햄버거'},

    ]
    return (
        // <RecommendTableWrapper>
        <>        
        <Navbar leftItems={leftItems} text='코스 추천' fontStyle ={{fontFamily: 'Apple SD Gothic Neo'}} />
        <ToggleDark />
        <FullBar/>
        <TextWrapper>추천코스</TextWrapper>
        <RecommendCardList TextGroupList={TextGroupList}/>
        <TextWrapper>PlayKUround 인기코스</TextWrapper>
        <RecommendCardList TextGroupList={TextGroupList}/>
        </>

        //</RecommendTableWrapper>
        
    );
}