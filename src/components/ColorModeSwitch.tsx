import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text>{colorMode}</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
