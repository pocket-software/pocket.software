import {Flex, Stack, Text, useColorMode} from '@chakra-ui/core';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';

const NotFound = () => {
  const [counter, setCounter] = useState(5);
  const mode = useColorMode();
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCounter((curr) => {
          if (curr - 1 === 0) {
            history.push('/');
          }
          return curr - 1;
        }),
      1000,
    );
    return () => clearInterval(interval);
  }, [history]);

  return (
    <Stack bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'} flex={1}>
      <Flex
        pt={[125, 100, 100]}
        minH={'50vh'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        px={15}
        flex={1}>
        <Text
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          fontWeight={'bold'}
          fontSize={[40, 60]}
          textAlign={'center'}>
          404 | couldn't find that
        </Text>
        <Text
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          fontWeight={'bold'}
          fontSize={[20]}
          textAlign={'center'}>
          Redirecting you in {counter} seconds...
        </Text>
      </Flex>
    </Stack>
  );
};

export default NotFound;
