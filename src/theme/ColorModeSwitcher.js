import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorModeSwitcher = ({scrolled}) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      fontSize="xl"
      variant="ghost"
      colorScheme={
        scrolled ? "whiteAlpha" : "gray"
      }
      _dark={{
        color: 'white',
      }}
      color={
        scrolled ? "white" : "black"
      }
      rounded={'full'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
