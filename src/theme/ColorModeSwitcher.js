import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = ({scrolled}) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
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
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
