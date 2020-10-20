import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorMode,
} from '@chakra-ui/core';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import * as Yup from 'yup';

const ReportSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  software: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  stepsToReproduce: Yup.string().required('Required'),
  additionalInfo: Yup.string(),
});

const SelectOption = ({children, ...rest}) => {
  const {colorMode} = useColorMode();

  return (
    <option
      style={{
        backgroundColor: colorMode === 'dark' ? '#181719' : '#f4f2f7',
      }}
      {...rest}>
      {children}
    </option>
  );
};

const Report = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mode = useColorMode();
  const location = useLocation();

  const _submit = (values) => {
    setIsSubmitting(true);

    // TODO handle form submission
  };

  const {
    handleChange,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      software: undefined,
      description: undefined,
      stepsToReproduce: '',
      additionalInfo: '',
    },
    onSubmit: _submit,
    validationSchema: ReportSchema,
  });

  useEffect(() => {
    if (location?.search) {
      const queryString = new URLSearchParams(location.search);
      if (queryString.get('software')) {
        setFieldValue('software', queryString.get('software'));
      }
    }
  }, [location, setFieldValue]);

  return (
    <Flex
      flexDir={'column'}
      bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
      flex={1}
      pt={[175, 150, 150]}
      pb={[50]}
      align={'center'}
      overflowX={'hidden'}>
      <Stack
        spacing={4}
        as={Flex}
        flexDir={'column'}
        className={'navbar-shadow'}
        bg={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
        w={['90%', '90%', '75%', '50%']}
        borderRadius={15}
        p={['25px', '25px', '50px']}
        color={mode.colorMode === 'dark' ? 'white.500' : 'black.500'}
        fontFamily={'Roboto'}>
        <Text fontWeight={'bold'} fontSize={30}>
          Report a bug
        </Text>
        <FormControl isInvalid={errors.name && touched.name} isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            name={'name'}
            onChange={handleChange}
            value={values.name}
            autoFocus
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email && touched.email} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            name={'email'}
            onChange={handleChange}
            value={values.email}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.software && touched.software} isRequired>
          <FormLabel htmlFor="software">Software</FormLabel>
          <Select
            id="software"
            name={'software'}
            onChange={handleChange}
            value={values.software}
            bg={mode.colorMode === 'dark' ? 'rgba(255,255,255,0.06)' : '#fff'}>
            <SelectOption value={'pocket.software'}>
              pocket.software
            </SelectOption>
            <SelectOption value={'calculator'}>calculator</SelectOption>
          </Select>
          <FormErrorMessage>{errors.software}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.description && touched.description}
          isRequired>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Select
            id="description"
            name={'description'}
            onChange={handleChange}
            value={values.description}
            bg={mode.colorMode === 'dark' ? 'rgba(255,255,255,0.06)' : '#fff'}>
            <SelectOption value={'UI bug'}>UI bug</SelectOption>
            <SelectOption value={'Issue on small/large screen'}>
              Issue on small/large screen
            </SelectOption>
            <SelectOption value={"I'm getting an error"}>
              I'm getting an error
            </SelectOption>
            <SelectOption value={'Slow loading times'}>
              Slow loading times
            </SelectOption>
            <SelectOption value={'Other'}>Other</SelectOption>
          </Select>
          <FormErrorMessage>{errors.software}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.stepsToReproduce && touched.stepsToReproduce}
          isRequired>
          <FormLabel htmlFor="stepsToReproduce">Steps to Reproduce</FormLabel>
          <Textarea
            id="stepsToReproduce"
            placeholder="Steps to reproduce"
            name={'stepsToReproduce'}
            onChange={handleChange}
            value={values.stepsToReproduce}
          />
          <FormErrorMessage>{errors.stepsToReproduce}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.additionalInfo && touched.additionalInfo}>
          <FormLabel htmlFor="additionalInfo">Additional Info</FormLabel>
          <Textarea
            id="additionalInfo"
            placeholder="Additional info"
            name={'additionalInfo'}
            onChange={handleChange}
            value={values.additionalInfo}
          />
          <FormErrorMessage>{errors.additionalInfo}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.stepsToReproduce && touched.stepsToReproduce}
          isRequired>
          <FormLabel htmlFor="stepsToReproduce">Steps to Reproduce</FormLabel>
          <Textarea
            id="stepsToReproduce"
            placeholder="Steps to reproduce"
            name={'stepsToReproduce'}
            onChange={handleChange}
            value={values.stepsToReproduce}
          />
          <FormErrorMessage>{errors.stepsToReproduce}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.stepsToReproduce && touched.stepsToReproduce}
          isRequired>
          <FormLabel htmlFor="stepsToReproduce">Steps to Reproduce</FormLabel>
          <Textarea
            id="stepsToReproduce"
            placeholder="Steps to reproduce"
            name={'stepsToReproduce'}
            onChange={handleChange}
            value={values.stepsToReproduce}
          />
          <FormErrorMessage>{errors.stepsToReproduce}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.stepsToReproduce && touched.stepsToReproduce}
          isRequired>
          <FormLabel htmlFor="stepsToReproduce">Steps to Reproduce</FormLabel>
          <Textarea
            id="stepsToReproduce"
            placeholder="Steps to reproduce"
            name={'stepsToReproduce'}
            onChange={handleChange}
            value={values.stepsToReproduce}
          />
          <FormErrorMessage>{errors.stepsToReproduce}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isSubmitting}
          variantColor={'brand'}
          type={'submit'}
          onClick={handleSubmit}
          alignSelf={'center'}
          color={mode.colorMode === 'dark' ? 'black.500' : 'white.500'}
          p={5}>
          Submit
        </Button>
      </Stack>
    </Flex>
  );
};

export default Report;
