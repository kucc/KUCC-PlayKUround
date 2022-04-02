import React, { useEffect, useState } from 'react';

import { Chip } from '@components';

import { categoryDetailMenuList, categoryMenuList, categoryMenuListType } from '@constants';

import { Container } from './styled';

export const SearchChipBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [menuList, setMenuList] = useState<categoryMenuListType>([]);
  const [itemCategory, setItemCategory] = useState<'A' | 'B' | 'C' | undefined>(undefined);
  const [itemCategoryDetail, setItemCategoryDetail] = useState<number | undefined>(undefined);

  useEffect(() => {
    setMenuList([...categoryMenuList(), ...categoryDetailMenuList()] as categoryMenuListType);
  }, []);

  const onClickHandler = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Container>
      {menuList.map(({ icon, label, category, categoryDetail }, index) => {
        return (
          <Chip
            key={index}
            shadow={true}
            icon={icon}
            label={label}
            labelStyle={{ width: 'max-content' }}
            onClick={() => {
              onClickHandler(index);
              setItemCategory(category);
              setItemCategoryDetail(categoryDetail);
            }}
            clickable={true}
            category={itemCategory}
            categoryDetail={itemCategoryDetail}
            clicked={selectedIndex === index}
            style={{
              padding: '10px 13px',
              marginLeft: index === 0 ? '16px' : '0px',
              marginRight: '6px',
              width: '100%',
            }}
          />
        );
      })}
    </Container>
  );
};
