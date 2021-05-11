import React, {memo} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import isEqual from 'react-fast-compare';
import {AuthorizeParamsList, APP_SCREEN} from '@navigation/screenTypes';
import {Block, Button, Screen, Text} from '@components';
import {onLogout} from '@store/app_redux/reducer';
import {useDispatch} from 'react-redux';
import {scale} from '@common';
import {navigate} from '@navigation/navigationService';
import {useTranslation} from 'react-i18next';

type HomeProps = StackScreenProps<AuthorizeParamsList, APP_SCREEN.HOME1>;
const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
  buttonStyle: {
    marginVertical: scale(20),
    backgroundColor: '#fff',
  },
});
// eslint-disable-next-line no-empty-pattern
const HomeComponent = ({}: HomeProps) => {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const onNextScreen = () => {
    navigate(APP_SCREEN.DETAIL_HOME, {});
  };
  const onNextScreenDetail = () => {
    navigate(APP_SCREEN.SEARCH_SCREEN, {});
  };
  const onChangeLanguage = () => {
    i18n.changeLanguage('en-US');
  };
  return (
    <Block block alignItems="center" justifyContent="center">
      <Button
        style={styles.buttonStyle}
        onPress={() => {
          dispatch(onLogout());
        }}>
        <Text style={styles.textStyle} tx={'main:homeTab:tvButtonLogout'} />
      </Button>
      <Button
        style={styles.buttonStyle}
        onPress={() => {
          dispatch(onNextScreen);
        }}>
        <Text style={styles.textStyle} tx={'main:homeTab:nextScreen'} />
      </Button>
      <Button
        style={styles.buttonStyle}
        onPress={() => {
          dispatch(onNextScreenDetail);
        }}>
        <Text style={styles.textStyle} tx={'main:homeTab:nextScreen'} />
      </Button>
    </Block>
  );
};

export const Home = memo(HomeComponent, isEqual);
