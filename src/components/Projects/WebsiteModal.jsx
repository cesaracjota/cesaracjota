import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const WebsiteModal = ({ websiteUrl, isOpen, onOpen, onClose }) => {

  const handleCloseModal = () => {
    onClose();
    websiteUrl=''
  }

  return (
    <>
      <Button
          target='_blank'
          size={'sm'}
          bg="primary.100"
          color="white"
          borderWidth={'1px'}
          _hover={{
              bg: 'transparent',
              color: 'primary.100',
              borderWidth: "1px",
              borderColor: 'primary.100',
          }}
          leftIcon={<FaExternalLinkAlt />}
          onClick={(e) => onOpen(websiteUrl)}
          fontSize={["xs", "sm"]}
          w={["full", "auto", "auto", "auto"]}
          borderRadius={'sm'}
      >
          Preview
      </Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="6xl">
        <ModalOverlay />
        <ModalContent borderRadius={'none'}>
          <ModalBody px={2}>
            <iframe src={websiteUrl} width="100%" height="550px" title="Website" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WebsiteModal;
