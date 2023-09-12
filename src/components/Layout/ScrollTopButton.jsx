import React from "react";
import { Box, Flex, IconButton, keyframes } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  // const [showScrollButton, setShowScrollButton] = useState(false);

  // useEffect(() => {
  //   const checkScrollTop = () => {
  //     if (!showScrollButton && window.pageYOffset > 0) {
  //       setShowScrollButton(true);
  //     } else if (showScrollButton && window.pageYOffset <= 0) {
  //       setShowScrollButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", checkScrollTop);

  //   return () => {
  //     window.removeEventListener("scroll", checkScrollTop);
  //   };
  // }, [showScrollButton]);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const openSendMessageWhatsApp = () => {
    const phoneNumber = "51942035890";
    const message = "Hola estimado. ¿Puedes proporcionarme más información sobre la tu servicio? Gracias.";
    
    const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, '_blank');
  };
  


  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

    return (

      <Flex
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        position="fixed"
        bottom="10px"
        right="10px"
        zIndex="99"
        className="scroll-top-button"
        padding={4}
        w={20}
        h={20}
      >
        <Box
          as="div"
          position="absolute"
          alignSelf="center"
          _before={{
            content: "''",
            position: "absolute",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-100%",
            borderRadius: "50%",
            bgColor: "whatsapp.400",
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <IconButton
            alignSelf="center"
            icon={
              <div className="icon-container">
                <FaWhatsapp color="white" />
              </div>
            }
            onClick={openSendMessageWhatsApp}
            size="lg"
            bg="whatsapp.500"
            _hover={{
              bg: "whatsapp.600",
            }}
            rounded="full"
            _dark={{
              bg: "whatsapp",
            }}
          />
        </Box>
      </Flex>
    );
};

export default ScrollTopButton;
