import React, { useState } from 'react';

import { MyCourseChip } from '@components';
import { AddCourseIcon } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import {
  EditContainer,
  MyCourseCardWrapper,
  MyCourseChipListWrapper,
  TopTextContainer,
} from './styled';
import { MyCourseCardProps } from './type';

export const MyCourseCard = ({ MyCourseChipList, index, onClick }: MyCourseCardProps) => {
  const { width } = useWindowDimensions();
  const IconColors = [
    'mediumpurple',
    'cadetblue',
    'chocolate',
    'coral',
    'cornflowerblue',
    'crimson',
    'darkcyan',
    'darkseagreen',
    'pink',
  ];
  const RandomIconColor = IconColors[Math.floor(Math.random() * IconColors.length)];
  const [editclicked, setEditClicked] = useState<boolean>(false);
  const onClickEdit = () => {
    setEditClicked(!editclicked);
  };
  return (
    <MyCourseCardWrapper IconColor={RandomIconColor} width={width * 0.9}>
      <TopTextContainer editclicked={editclicked}>
        <span>코스 {index}</span>
        {editclicked ? (
          <EditContainer onClick={onClickEdit} editclicked={editclicked}>
            완료
          </EditContainer>
        ) : (
          <EditContainer onClick={onClickEdit} editclicked={editclicked}>
            편집
          </EditContainer>
        )}
      </TopTextContainer>
      <MyCourseChipListWrapper>
        {MyCourseChipList?.map(({ imageSource, place }, index) => {
          return (
            <MyCourseChip
              imageSource={imageSource}
              place={place}
              index={index + 1}
              isEdited={editclicked}
            />
          );
        })}
        {editclicked ? <AddCourseIcon /> : null}
      </MyCourseChipListWrapper>
    </MyCourseCardWrapper>
  );
};
