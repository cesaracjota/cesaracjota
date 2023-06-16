import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorModeSwitcher = ({ display }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      fontSize="lg"
      variant="ghost"
      display={display}
      rounded={'full'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
