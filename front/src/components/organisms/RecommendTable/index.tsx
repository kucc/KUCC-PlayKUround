import React from "react";
import { Navbar } from "..";
import { RecommendCardList } from "@components";
import { MenuIcon } from "@styles";
import { ToggleDark } from "@components";
import { TextWrapper } from "@components/molecules/Card/styled";
export const RecommendTable = () => {
    const leftItems = [<MenuIcon />];
    const TextGroupList = [
        {description: '떡볶이'},
        {description: '마라탕'},
        {description: '치킨'},
        {description: '피자'},
        {description: '커피'},
        {description: '아이스크림'},
        {description: '짜장면'},
        {description: '찜닭'},
        {description: '햄버거'},

    ]
    return (
        <>
        <Navbar leftItems={leftItems} text='코스 추천' />
        <ToggleDark />
        <TextWrapper>추천코스</TextWrapper>
        <RecommendCardList TextGroupList={TextGroupList}/>
        </>
    );
}