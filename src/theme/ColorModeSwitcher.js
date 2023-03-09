import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaRegMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(ImSun, FaRegMoon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      onClick={toggleColorMode}
      aria-label={`Switch to ${useColorModeValue('dark', 'light')} mode`}
      color={useColorModeValue('gray.600', 'inherit')}
      icon={<SwitchIcon />}
      alignSelf="center"
      variant={'ghost'}
      rounded={'full'}
    />
  );
};
