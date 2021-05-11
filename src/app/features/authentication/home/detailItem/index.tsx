import React, {memo, useState, useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import isEqual from 'react-fast-compare';
import {AuthorizeParamsList, APP_SCREEN} from '@navigation/screenTypes';
import {Block, Button, ListView, Screen, Text} from '@components';
import {scale} from '@common';
import {goBack, navigate} from '@navigation/navigationService';
import I18n from './../../../../assets/locales/index';
type DetailItemProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.DETAIL_ITEM
>;
const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
    backgroundColor: '#fff',
  },
});
const DetailItemComponent = ({route}: DetailItemProps) => {
  const [stateRefresh, setStateRefresh] = useState(true);
  // const {keyHome}: {keyHome: any} = route.params;

  const _onNavigate = () => {
    navigate(APP_SCREEN.DETAIL_HOME, {});
  };

  const _onRefresh = () => {};
  return (
    <Block block alignItems="center" justifyContent="center">
      <Text style={{marginTop: 100}}>Detail Item</Text>
      <Button onPress={_onNavigate}>
        <Text style={styles.textStyle} tx={'main:homeTab:goBack'} />
      </Button>
    </Block>
  );
};

export const DetailItem = memo(DetailItemComponent, isEqual);
