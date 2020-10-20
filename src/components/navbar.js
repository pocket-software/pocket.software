import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useTheme,
} from '@chakra-ui/core';
import React from 'react';
import {Flag, GitHub, Moon, Sun} from 'react-feather';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Logo from '../assets/icons/logo';

const Navbar = () => {
  const theme = useTheme();
  const mode = useColorMode();
  const history = useHistory();

  return (
    <Flex
      position={'fixed'}
      zIndex={1}
      top={0}
      left={0}
      right={0}
      className={'navbar-shadow'}
      bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
      flexDir={['column', 'row']}
      justify={'space-between'}
      align={'center'}
      p={30}>
      <Box cursor={'pointer'} onClick={() => history.push('/')}>
        <Logo
          size={50}
          color={
            mode.colorMode === 'dark'
              ? theme.colors.white['500']
              : theme.colors.black['500']
          }
        />
      </Box>

      <Stack isInline spacing={3}>
        <IconButton
          as={RouterLink}
          to={'/report'}
          aria-label={'Report a bug'}
          title={'Report a bug'}
          bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          icon={Flag}>
          {null}
        </IconButton>
        <IconButton
          as={Link}
          href={'https://github.com/pocket-software'}
          target={'_blank'}
          isExternal
          aria-label={'Pocket Software GitHub'}
          title={'Pocket Software GitHub'}
          bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          icon={GitHub}>
          {null}
        </IconButton>
        <IconButton
          aria-label={'Toggle color mode'}
          title={'Toggle color mode'}
          bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          icon={mode.colorMode === 'dark' ? Sun : Moon}
          onClick={mode.toggleColorMode}>
          {null}
        </IconButton>
      </Stack>
    </Flex>
  );
};

export default Navbar;
