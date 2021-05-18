import {TextField} from '@components';
import {HookFormRules} from '@config/type';
// import {FormLoginType} from '@model/login';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {useController, useFormContext} from 'react-hook-form';
import {Text, TextInputProps, StyleSheet} from 'react-native';

export type FormValidateType = {
  name: string;
  email: string;
  phoneNumber: string;
};

interface InputProps extends TextInputProps {
  name: keyof FormValidateType;
  label: string;
  onSubmit?: () => void;
  nameTrigger?: keyof FormValidateType;
  rules?: HookFormRules;
}

const InputComponent = ({
  onSubmit,
  label,
  name,
  rules,
  nameTrigger,
  defaultValue = '',
  ...rest
}: InputProps) => {
  // state
  const {
    formState: {errors},
    control,
    trigger,
    getValues,
  } = useFormContext<FormValidateType>();
  const {field} = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  return (
    <>
      <TextField
        onSubmit={onSubmit}
        ref={field.ref}
        nameTrigger={nameTrigger}
        trigger={trigger}
        error={errors[name]?.message !== undefined}
        label={label}
        name={name}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        defaultValue={getValues()[name]}
        typeInput={'flat'}
        {...rest}
      />
      <Text style={styles.errorText}>{errors[name]?.message}</Text>
    </>
  );
};

export const InputForm = memo(InputComponent, isEqual);

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
