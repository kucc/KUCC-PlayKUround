import styled from "styled-components";
import { Colors } from "@styles";
export const CardWrapper = styled.div<{width:number; height: number, background?: string}>`
  position: relative;
  overflow:hidden;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color:${({background})=> background || Colors.black};
    opacity: 70%;
  }
  `;
export const CardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  &:hover {
      background: black;
      opacity: 70%;
    }
    `;
export const CardDescription = styled.div`
position: absolute;
font-family: Apple SD Gothic Neo;
font-size: 1em;
font-weight: 700;
line-height: 20px;
text-align: center;
color: ${Colors.white};
left: 2%;
right: 2%;
bottom:16%;
`;