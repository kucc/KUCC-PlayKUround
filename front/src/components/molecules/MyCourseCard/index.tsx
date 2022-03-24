import React, { useCallback, useEffect, useState } from 'react';

import { MyCourseChip } from '@components';
import { AddCourseIcon } from '@components';
import { DeleteCoursePlaceIcon } from '@components';

import { reactQueryOption } from '@constants';
import { useWindowDimensions } from '@hooks/useWindowDimensions';

import {
  CourseChipWithDeleteIcon,
  DeleteIconWrapper,
  EditContainer,
  MyCourseCardWrapper,
  MyCourseChipListWrapper,
  TopTextContainer,
} from './styled';
import { MyCourseCardProps } from './type';

export const MyCourseCard = ({ MyCourseChipList, index }: MyCourseCardProps) => {
  const { width } = useWindowDimensions();
  const IconColors = [
    'mediumpurple',
    'pink',
    'cadetblue',
    'chocolate',
    'coral',
    'cornflowerblue',
    'crimson',
    'darkcyan',
    'darkseagreen',
  ];
  const pickColor = useCallback(() => {
    return IconColors[index];
  }, []);
  // const RandomIconColor = IconColors[Math.floor(Math.random() * IconColors.length)];
  const [editclicked, setEditClicked] = useState<boolean>(false);
  const onClickEdit = () => {
    setEditClicked(!editclicked);
  };
  const [courses, setCourse] =
    useState<Array<{ id: number; imageSource?: string; place: string }>>(MyCourseChipList);

  const addToCourse = useCallback(
    (id: number, place: string, imageSource?: string) => {
      setCourse([...courses, { id: id, imageSource: imageSource, place: place }]);
    },
    [courses],
  );
  const removeFromCourse = useCallback(
    (id: number) => {
      setCourse(courses.filter(course => course.id !== id));
    },
    [courses],
  );
  const randomArrayShuffle = (array: Array<string>) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  useEffect(() => {
    randomArrayShuffle(IconColors);
  }, [IconColors]);
  return (
    <MyCourseCardWrapper IconColor={pickColor} width={width * 0.9}>
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
        {courses?.map(({ id, imageSource, place }, index) => {
          return (
            <CourseChipWithDeleteIcon>
              <MyCourseChip
                key={id}
                imageSource={imageSource}
                place={place}
                index={index + 1}
                isEdited={editclicked}
              />
              {editclicked ? (
                <DeleteIconWrapper onClick={() => removeFromCourse(id)}>
                  <DeleteCoursePlaceIcon />
                </DeleteIconWrapper>
              ) : null}
            </CourseChipWithDeleteIcon>
          );
        })}
        {editclicked ? <AddCourseIcon /> : null}
      </MyCourseChipListWrapper>
    </MyCourseCardWrapper>
  );
};
