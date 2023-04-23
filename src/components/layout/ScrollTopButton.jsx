import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      icon={
        <div className="icon-container">
          <FaArrowUp />
        </div>
      }
      onClick={scrollToTop}
      display={showScrollButton ? "block" : "none"}
      size="lg"
      bg="primary.100"
      _hover={{
        bg: "primary.100",
        transform: "scale(1.1)",
        transition: 'all 0.3s ease-in-out'
      }}
      _dark={{
        bg: "primary.100",
      }}
      color="white"
      boxShadow={'base'}
      borderRadius="full"
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="99"
      className="scroll-top-button"
    />
  );
};

export default ScrollTopButton;