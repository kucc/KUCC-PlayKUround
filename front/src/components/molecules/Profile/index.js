import React from 'react';

import { MyMenu } from '@components';

export const Profile = ({ name, children }) => {
  return (
    <div className='profile-wrapper'>
      <div className='profile-pic profile'>{children}</div>
      <div className='profile-name profile'>{name}</div>
      <MyMenu />
      <style jsx>{`
        .profile {
          display: flex;
          justify-content: center;
        }
        .profile-wrapper {
          width: 390px;
          height: 249px;
          border-style: 1px solid #0000ff;
        }
        .profile-pic {
          width: 81px;
          height: 81px;
          border-radius: 50%;
        }
        .profile-name {
          width: 148px;
          height: 20px;
        }
      `}</style>
    </div>
  );
};
