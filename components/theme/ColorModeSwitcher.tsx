import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Tooltip,
  IconButton,
} from '@chakra-ui/react'
import useSound from 'use-sound'
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const mode = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const [play] = useSound('/assets/audios/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  })

  const handleClick = () => {
    mode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' })
    toggleColorMode()
  }

  return (

    <Tooltip
      label={mode === "dark" ? "Dark mode" : "Light mode"}
      aria-label="A tooltip"
    >
      <IconButton
        size="md"
        fontSize="md"
        variant="ghost"
        color="current"
        outlineColor={'gray.500'}
        //rounded="100%"
        marginLeft="2"
        onClick={handleClick}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${mode} mode`}
        _hover={{
          bg: useColorModeValue("gray.200", "gray.700")
        }}
        {...props}
      />
    </Tooltip>
  )
}
