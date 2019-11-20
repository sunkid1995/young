import React from 'react';

// Wrapped layout
import WrappedLayout from '../WrappedLayout';

// Render router
import RenderRouter from '../../core/RenderRouter';

const App = () => (
  <WrappedLayout>
    <RenderRouter />
  </WrappedLayout>
);

export default App;
