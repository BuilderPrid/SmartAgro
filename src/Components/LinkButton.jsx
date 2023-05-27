import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button as="span"  h="80px" w='150px' fontSize='30px'  bgBlendMode='blur'colorScheme='gray' variant='solid'>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;