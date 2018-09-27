import React from 'react';

const SettingContainer = props => {
  // A simple container for displaying user settings.
  // Container takes a title, a subTitle, and the child component to be rendered

  const { title, subTitle, children } = props;

  return (
    <div>
      <h3 className='underline'>{title ? title : 'Setting'}</h3>
      <span className='small' style={{ margin: '10px auto' }}>
        {props.subTitle ? subTitle : ''}
      </span>
      {children}
    </div>
  );
};

export default SettingContainer;
