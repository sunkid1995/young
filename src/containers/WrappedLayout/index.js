import React from 'react';
import propTypes from 'prop-types';

const WrappedLayout = props => {
  const { children } = props;

  return (
    <div className="wrapped-app">
      {children}
    </div>
  );
};

WrappedLayout.propTypes = {
  children: propTypes.object.isRequired,
};

export default WrappedLayout;
