import React from 'react';

import { RecommendCard } from '@components';
import { CardsWrapper } from './styled';
import { RecommendProps } from './type';
export const RecommendCardList=({TextGroupList}:RecommendProps)=>{
    return(
    <CardsWrapper>
    {TextGroupList.map(({imageSource,description})=> {
    return (
    <RecommendCard imageSource = {imageSource} description={description}  />
    );})}
    </CardsWrapper>
    );};