import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { HiMoon, HiSun } from 'react-icons/hi';

export const ColorModeSwitcher = ({scrolled}) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(HiMoon, HiSun);

  return (
    <IconButton
      fontSize="2xl"
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
