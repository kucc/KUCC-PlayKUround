import React from 'react';
import { RecommendCardProps } from "./type";
import { CardWrapper,CardImg,CardDescription } from "./styled";
export const RecommendCard= ({description, imageSource}: RecommendCardProps) => {
    return (
        <CardWrapper>
    <CardImg src = {imageSource ||'pictures/recommend-cafe.png'} />
    <CardDescription>{description}</CardDescription>
     </CardWrapper>);
 
    };