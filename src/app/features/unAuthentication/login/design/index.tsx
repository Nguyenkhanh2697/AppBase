import {Block, Wallpaper, Screen, Button, Text} from '@components';
import {FormLoginType} from '@model/login';
import React, {memo, useCallback, useState} from 'react';
import isEqual from 'react-fast-compare';
import {useDispatch, useSelector} from 'react-redux';
import {FormLogin} from './components/FormLogin';
import {onSetToken} from '@store/app_redux/reducer';
const LoginComponent = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback((data: FormLoginType) => {
    // console.log('dddd');
    dispatch(onSetToken('token'));
    // alert(JSON.stringify(data));
  }, []);
  return (
    <Block
      block
      paddingTop={0}
      alignItems={'center'}
      justifyContent={'center'}
      paddingHorizontal={40}>
      {/* <Wallpaper /> */}

      <Screen
        style={{
          paddingVertical: 0,
          paddingHorizontal: 10,
        }}
        scroll={true}
        backgroundColor={'transparent'}>
        <FormLogin onSubmit={onSubmit} />
      </Screen>
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
