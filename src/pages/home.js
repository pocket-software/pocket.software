import {
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/core';
import React, {useCallback, useEffect, useState} from 'react';
import {Download, GitHub} from 'react-feather';
import {getRepos} from '../utils/github';

const repos = [
  {
    name: 'calculator',
    package: 'software.pocket.calculator',
  },
];

const Home = () => {
  const [apps, setApps] = useState([]);
  const toast = useToast();
  const mode = useColorMode();

  const getApps = useCallback(() => {
    getRepos()
      .then((reps) =>
        setApps(reps.filter((app) => app.name !== 'pocket.software')),
      )
      .catch(() => {
        toast({
          title: 'Error Loading Projects',
          description:
            'There was an error while loading the projects. Please click the flag at the top of the screen to report this issue. Thank you.',
          status: 'error',
          position: 'bottom-right',
          isClosable: true,
        });
      });
  }, [toast]);

  useEffect(() => {
    getApps();
  }, [getApps]);

  return (
    <Stack bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'} flex={1}>
      <Flex
        pt={[125, 100, 100]}
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        px={15}>
        <Text
          color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
          fontWeight={'bold'}
          fontSize={60}
          textAlign={'center'}>
          simple apps for your back pocket
        </Text>
      </Flex>
      {apps.map((app) => {
        const extraInfo = repos.find((repo) => repo.name === app.name);
        return (
          <Flex align={'center'} py={15} px={15} key={app.name}>
            <Image
              bg={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
              p={15}
              src={`https://raw.githubusercontent.com/${
                app.full_name
              }/main/src/assets/images/${
                mode.colorMode === 'dark' ? 'light' : 'dark'
              }_logo_transparent.png`}
              w={100}
              h={100}
              borderRadius={15}
              mr={15}
            />
            <Stack spacing={1}>
              <Text
                pr={2}
                alignItems={'center'}
                color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
                fontWeight={'bold'}
                fontSize={25}>
                {app.name}
              </Text>
              <Text
                color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}>
                {app.description}
              </Text>
              <Stack isInline>
                <IconButton
                  as={Link}
                  href={`https://play.google.com/store/apps/details?id=${extraInfo.package}`}
                  target={'_blank'}
                  isExternal
                  aria-label={`Get ${app.name} on Google Play`}
                  title={`Get ${app.name} on Google Play`}
                  bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
                  color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
                  icon={Download}>
                  {null}
                </IconButton>
                <IconButton
                  as={Link}
                  href={app.html_url}
                  target={'_blank'}
                  isExternal
                  aria-label={`${app.name} GitHub`}
                  title={`${app.name} GitHub`}
                  bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
                  color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
                  icon={GitHub}>
                  {null}
                </IconButton>
              </Stack>
            </Stack>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default Home;
