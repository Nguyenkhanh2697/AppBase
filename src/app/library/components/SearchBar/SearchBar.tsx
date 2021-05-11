import React, {memo, useMemo} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Block} from '../Block/Block';
import Icon from 'react-native-vector-icons/MaterialIcons';
import equals from 'react-fast-compare';

import {SearchBarProps} from './SearchBar.prop';
import {FontSizeDefault} from '@theme/fontSize';
import {translate} from '@utils';
const SearchBarComponent = ({
  placeHolderTx = '',
  onChangeText,
}: SearchBarProps) => {
  const actualPlaceHolder = useMemo(() => translate(placeHolderTx) ?? '', [
    placeHolderTx,
  ]);

  return (
    <Block color={'#d6d4e4'} padding={5}>
      <Block
        direction={'row'}
        borderRadius={5}
        color={'#eeeeee'}
        paddingHorizontal={5}
        middle
        paddingVertical={3}>
        {/* <Icon
          style={[styles.icon]}
          color={'#333333'}
          size={24}
          name={'Search'}
        /> */}
        <TextInput
          style={[styles.input]}
          placeholder={actualPlaceHolder}
          placeholderTextColor={'gray'}
          allowFontScaling={false}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
        />
      </Block>
    </Block>
  );
};

export const SearchBar = memo(SearchBarComponent, equals);
const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: FontSizeDefault.FONT_15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingLeft: 10,
  },
  icon: {
    marginTop: 3,
  },
});
