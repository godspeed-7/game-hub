import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
