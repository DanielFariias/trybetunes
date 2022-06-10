import React from 'react';
import * as C from './styles';

export default function Loader() {
  return (
    <C.Overlay>
      <C.StyledSpinner size={90} />
    </C.Overlay>
  );
}
