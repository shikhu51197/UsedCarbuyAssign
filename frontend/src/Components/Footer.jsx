import React, { useState, useEffect } from 'react';
import { Box, Center, Text, Link, IconButton } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      // Set showFooter to true if the user has scrolled to the bottom, otherwise false
      setShowFooter(isAtBottom);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Show the footer only when showFooter is true
    showFooter && (
      <Box
        bg="blank"
        p={4}
        position="fixed"
        bottom={0}
        width="100%"
        zIndex="1000"
      >
        <Center>
          <IconButton
            as={Link}
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            mr={2}
          />
          <IconButton
            as={Link}
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            mr={2}
          />
          <IconButton
            as={Link}
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            mr={2}
          />
          <IconButton
            as={Link}
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
        </Center>
        <Center mt={2}>
          <Text fontSize="sm">
            © 2023 Your Company. All rights reserved.
          </Text>
        </Center>
      </Box>
    )
  );
};

export default Footer;
