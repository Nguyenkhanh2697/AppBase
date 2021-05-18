import React from 'react';
import {View, TextInput, Text, StyleSheet, TextInputProps} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Controller, useForm} from 'react-hook-form';
import {HookFormRules} from '@config/type';

interface Props extends TextInputProps {
  name: keyof FormValue;
  label: string;
  onSubmit?: () => void;
  nameTrigger?: keyof FormValue;
  rules?: HookFormRules;
  placeholder?: string;
  textField?: string;
  textValidate?: string;
  regex: RegExp | undefined;
}

// interface Props {
//   placeholder?: string;
//   textField?: string;
//   textValidate?: string;
//   regex?: any;
//   names: keyof FormValue;
// }
type FormValue = {
  name: string;
  phoneNumber: string;
  email: string;
};

const I18nCommon = (props: Props) => {
  const {textField, placeholder, regex, name, nameTrigger}: Props = props;
  const {t, i18n} = useTranslation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValue>();
  return (
    <>
      <Text>{textField}</Text>
      <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name={name}
        rules={{
          required: {
            value: true,
            message: 'yeu cau',
          },
          pattern: {
            value: {regex},
            message: 'yeu cau',
          },
        }}
      />
      {/* <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder=""
            style={[
              styles.input,
              errors.phoneNumber?.message
                ? {borderWidth: 1, borderColor: 'red'}
                : null,
            ]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
          )}
          name='name'
      /> */}
    </>
  );
};

export default I18nCommon;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
    // borderWidth: 1,
  },
});
