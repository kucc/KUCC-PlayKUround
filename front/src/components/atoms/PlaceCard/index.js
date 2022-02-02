export const PlaceCard = ({ children, placeName, contents }) => {
  return (
    <div className='placecard-wrapper'>
      <div className='image-wrapper'>{children}</div>
      <div className='content-wrapper'>
        <div>{placeName}</div>
        <div>{contents}</div>
      </div>
    </div>
  );
};
