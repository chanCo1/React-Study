import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ItemContainer = styled.div`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  justify-content: flex-start;
  transition: none;
  transition-duration: 0.1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.169);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(3.5px);
    // border: '1px solid rgba(255, 255, 255, 0.18)',
    border-radius: 10px;
    cursor: pointer;
  }

  .icon {
    margin: 6px .5rem 0 0;
  }
`;

const Item = ({ icon, name }) => {

  const subheading ={
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: 'none',
    }
  };

  return (
    <ItemContainer>
      <motion.div className='icon'>
        {icon}
      </motion.div>
      <motion.span
        variants={subheading}
      >
        {name}
      </motion.span>
    </ItemContainer>
  );
};

export default Item;