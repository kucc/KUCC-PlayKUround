import React from 'react';
import { RecommendCardProps } from "./type";
import { CardWrapper,CardImg,CardDescription } from "./styled";
import useWindowDimensions from '@hooks/useWindowDimensions';
export const RecommendCard= ({description, imageSource, topText, bottomText, topCommaText}: RecommendCardProps) => {
    const { width, height } = useWindowDimensions();
    return (
        <CardWrapper width = {width * 0.3} height = {width*0.3}>
    <CardImg src = {imageSource ||'pictures/recommend-cafe.png'} />
    <CardDescription>{description}</CardDescription>
     </CardWrapper>);
 
    };