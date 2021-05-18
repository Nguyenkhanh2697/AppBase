import {ValidationMap} from '@config/type';
import {FormLoginType} from '@model/login';
import React, {memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
// import {Input} from './Input';
import {Block, Wallpaper, Screen, Button, Text} from '@components';
import {InputForm} from './InputComponent';
import {FormValidateType} from './InputComponent';

interface FormProps {
  onSubmit: (data: FormValidateType) => void;
}
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

const ReactHookForm = ({onSubmit}: FormProps) => {
  const {t} = useTranslation();
  const formMethod = useForm<FormValidateType>({mode: 'all'});
  const rules = useMemo(
    () =>
      ({
        name: {
          required: {value: true, message: t('input.errorNameRequired')},
        },
        email: {
          required: {
            value: true,
            message: t('input.errorEmailRequired'),
          },
          pattern: {
            value: regexEmail,
            message: t('input.errorEmail'),
          },
        },
        phoneNumber: {
          required: {value: true, message: t('input.errorPhoneRequired')},
          pattern: {
            value: regexPhoneNumber,
            message: t('input.errorPhone'),
          },
        },
      } as ValidationMap<FormValidateType>),
    [],
  );
  const onSubmitKey = useCallback(() => {
    formMethod.handleSubmit(onSubmit)();
  }, [formMethod, onSubmit]);
  return (
    <Block style={{}}>
      <FormProvider {...formMethod}>
        <InputForm rules={rules.name} name={'name'} label={t('input.name')} />
        <InputForm
          rules={rules.email}
          nameTrigger={'email'}
          name={'email'}
          label={t('input.email')}
        />
        <InputForm
          rules={rules.phoneNumber}
          nameTrigger={'phoneNumber'}
          name={'phoneNumber'}
          label={t('input.phone')}
        />
        <Button onPress={onSubmitKey}>
          <Text>{t('input.save')}</Text>
        </Button>
      </FormProvider>
    </Block>
  );
};

export default ReactHookForm;

const styles = StyleSheet.create({});
