import {ValidationMap} from '@config/type';
import {FormLoginType} from '@model/login';
import React, {memo, useCallback, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from './Input';
import {Block, Wallpaper, Screen, Button, Text} from '@components';

interface FormLoginProps {
  onSubmit: (data: FormLoginType) => void;
}

const FormLoginComponent = ({onSubmit}: FormLoginProps) => {
  // state
  const formMethod = useForm<FormLoginType>({mode: 'all'});
  const {password} = formMethod.watch();
  const isDirty = formMethod.formState.dirtyFields.rePassword;

  const rules = useMemo(
    () =>
      ({
        name: {required: {value: true, message: 'Name is required'}},
        password: {required: {value: true, message: 'Password is required'}},
        rePassword: {
          required: {value: true, message: 'Password is required'},
          validate: (val: string | undefined) => {
            return !isDirty || val === password
              ? undefined
              : 'Passwords do not match';
          },
        },
      } as ValidationMap<FormLoginType>),
    [isDirty, password],
  );

  // function
  const onSubmitKey = useCallback(() => {
    formMethod.handleSubmit(onSubmit)();
  }, [formMethod, onSubmit]);

  // render
  return (
    <FormProvider {...formMethod}>
      <Input rules={rules.name} name={'name'} label={'Name'} />
      <Input
        rules={rules.password}
        nameTrigger={'rePassword'}
        name={'password'}
        label={'Password'}
      />
      <Input
        rules={rules.rePassword}
        onSubmit={onSubmitKey}
        name={'rePassword'}
        label={'Confirm Password'}
      />
      <Button
        style={[styles.btnItem, {marginTop: scale(30)}]}
        onPress={onSubmitKey}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 1.3, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#54ADDF', '#1772B7']}
          style={styles.styleGradient}>
          <Text style={styles.txtBtn}>ĐĂNG NHẬP</Text>
        </LinearGradient>
      </Button>
      <Button
        style={[styles.btnItem, {backgroundColor: '#E50019', marginTop: 18}]}
        onPress={onSubmit}>
        <Text style={styles.txtBtn}>ĐĂNG NHẬP 3G/4G</Text>
      </Button>
    </FormProvider>
  );
};
import {FontSizeDefault} from '@theme/fontSize';
import {scale} from '@common';
const styles = StyleSheet.create({
  btnItem: {
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  styleGradient: {width: '100%', borderRadius: 6},
  txtBtn: {
    fontSize: FontSizeDefault.FONT_18,
    fontWeight: 'bold',
    paddingVertical: scale(16),
    color: '#fff',
    textAlign: 'center',
  },
});
export const FormLogin = memo(FormLoginComponent, isEqual);
