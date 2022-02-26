import React from 'react';
import { RecommendCardProps } from "./type";
import { CardWrapper,CardImg,CardDescription } from "./styled";
import useWindowDimensions from '@hooks/useWindowDimensions';
export const RecommendCard= ({imageSource, topText, bottomText, topCommaText,background,style}: RecommendCardProps) => {
    const { width, height } = useWindowDimensions();
    return (
        <CardWrapper width = {width * 0.3} height = {width*0.3} style = {style}>
    <CardImg background={background} src = {imageSource ||'pictures/insta-card.png'} />
    <CardDescription>
    <span>{topCommaText}</span>
    <div>{topText}</div>
    <div>{bottomText}</div>
    </CardDescription>
     </CardWrapper>);
    };