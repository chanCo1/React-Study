import React from 'react';
import styled from 'styled-components';

import { DashboardRounded } from '@material-ui/icons'

const ItemContainer = styled.div`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  justify-content: flex-start;

  .icon {
    margin: 6px .5rem 0 0;
  }
`;

const Item = ({ icon, name }) => {
  return (
    <ItemContainer>
      <div className='icon'>
        {icon}
      </div>
      <span>
        {name}
      </span>
    </ItemContainer>
  );
};

export default Item;