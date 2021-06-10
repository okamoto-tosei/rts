import React, { memo } from 'react';
import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      oka
    </ChildAsFC>
  );
};

export default memo(Parent);
