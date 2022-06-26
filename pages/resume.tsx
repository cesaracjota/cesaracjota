import { Box, Center, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FaLocationArrow } from 'react-icons/fa';
import { useLinkColor, linkColors } from '../components/theme/colors';

const Resume = () => {
  const linkColor = useLinkColor();

  const downloadResume = () => {
    window.open('./Cesar-Acjota-CV.pdf');
  };

  return (
    <Box>
      <Center>
        <VStack>
          <Box as="h2" fontSize="1xl" fontWeight="700" textColor={linkColor} textAlign="right">
            <Button
              onClick={downloadResume}
              colorScheme={linkColor}
              outlineColor={linkColor}
              variant="outline"
              size="md"
              rightIcon={<FaLocationArrow />}
            >
              Mi CV
            </Button>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default Resume;
