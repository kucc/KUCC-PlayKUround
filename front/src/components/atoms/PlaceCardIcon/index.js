import { BookOutlined } from '@ant-design/icons';

export const PlaceCardIcon = ({ children, placeType }) => {
  return (
    <div>
      <BookOutlined />
      {placeType}
    </div>
  );
};
