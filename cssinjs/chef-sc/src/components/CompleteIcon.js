import * as React from 'react';
import 'styled-components/macro';

export const CompleteIcon = ({icon}) => (
  <div
    css={`
      height: 100%;
      display: flex;
      align-items: center;
      font-size: ${({theme}) => theme.fontSizes.xxxxl};
    `}
  >
    {icon}
  </div>
);
