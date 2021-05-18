// import {Text} from '@components';
import {Block, Screen, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  // Button,
  StyleSheet,
  Switch,
} from 'react-native';
import ReactHookForm from './ReactHookForm';

const HookFormScreen = () => {
  const navigation = useNavigation();

  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    i18n.changeLanguage(i18n.language === 'vi_VN' ? 'en_US' : 'vi_VN');
    setIsEnabled(previousState => !previousState);
  };
  const {i18n} = useTranslation();

  const onSubmit = () => {
    Alert.alert('success');
  };
  return (
    //   <View style={styles.container}>
    //     <View style={styles.header}>
    //       <TouchableOpacity onPress={() => navigation.goBack()}>
    //         {/* <Text>{t('back')}</Text> */}
    //         <Text tx={'input.back'} />
    //       </TouchableOpacity>
    //       <Text style={styles.txtHeader}>React Hook Form</Text>
    //     </View>
    // <View style={{flexDirection: 'row'}}>

    // </View>

    //     <Text
    //       style={{
    //         fontWeight: 'bold',
    //         fontSize: 20,
    //         marginTop: 20,
    //         marginBottom: 30,
    //       }}>
    //       Render: {count++}
    //     </Text>
    //     <Text style={styles.label} tx={'input.name'}>
    //       <Text style={{color: 'red'}}>*</Text>
    //     </Text>
    //     {/* <Text style={styles.label}>
    //       {t('name')}

    //     </Text> */}

    //     <Controller
    //       defaultValue=""
    //       control={control}
    //       render={({field: {onChange, onBlur, value}}) => (
    //         <TextInput
    //           placeholder={t('input.name')}
    //           style={[
    //             styles.input,
    //             errors.name?.message
    //               ? {borderWidth: 1, borderColor: 'red'}
    //               : null,
    //           ]}
    //           onBlur={onBlur}
    //           onChangeText={value => onChange(value)}
    //           value={value}
    //         />
    //       )}
    //       name="name"
    //       rules={{
    //         required: {
    //           value: true,
    //           message: t('errorNameRequired'),
    //         },
    //       }}
    //     />
    //     {errors.name && (
    //       <Text style={{color: 'red'}}>{errors.name?.message}</Text>
    //     )}
    //     <Text style={styles.label}>
    //       {t('email')}
    //       <Text style={{color: 'red'}}>*</Text>
    //     </Text>
    //     <Controller
    //       defaultValue=""
    //       control={control}
    //       render={({field: {onChange, onBlur, value}}) => (
    //         <TextInput
    //           placeholder={t('email')}
    //           style={[
    //             styles.input,
    //             errors.email?.message
    //               ? {borderWidth: 1, borderColor: 'red'}
    //               : null,
    //           ]}
    //           onBlur={onBlur}
    //           onChangeText={value => onChange(value)}
    //           value={value}
    //         />
    //       )}
    //       name="email"
    //       rules={{
    //         required: {
    //           value: true,
    //           message: t('errorEmailRequired'),
    //         },
    //         pattern: {
    //           value: regexEmail,
    //           message: t('errorEmail'),
    //         },
    //       }}
    //     />
    //     <Text style={{color: 'red'}}>{errors.email?.message}</Text>
    //     <Text style={styles.label}>
    //       {t('phone')}
    //       <Text style={{color: 'red'}}>*</Text>
    //     </Text>
    //     <Controller
    //       defaultValue=""
    //       control={control}
    //       render={({field: {onChange, onBlur, value}}) => (
    //         <TextInput
    //           placeholder={t('phone')}
    //           style={[
    //             styles.input,
    //             errors.phoneNumber?.message
    //               ? {borderWidth: 1, borderColor: 'red'}
    //               : null,
    //           ]}
    //           onBlur={onBlur}
    //           onChangeText={value => onChange(value)}
    //           value={value}
    //         />
    //       )}
    //       name="phoneNumber"
    //       rules={{
    //         required: {
    //           value: true,
    //           message: t('errorPhoneRequired'),
    //         },
    //         pattern: {
    //           value: regexPhoneNumber,
    //           message: t('errorPhone'),
    //         },
    //       }}
    //     />
    //     <Text style={{color: 'red', marginBottom: 30}}>
    //       {errors.phoneNumber?.message}
    //     </Text>
    //     <Button title={t('save')} onPress={handleSubmit(onSubmit)} />
    //   </View>
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
        <ReactHookForm onSubmit={onSubmit} />
        <Block style={{flexDirection: 'row'}}>
          <Switch
            trackColor={{false: '#767577', true: '#767577f'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {isEnabled === false ? 'VN' : 'EN'}
          </Text>
        </Block>
      </Screen>
    </Block>
  );
};

export default HookFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '25%',
  },
  textInputGroup: {
    marginTop: 50,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  titleTextInput: {
    color: '#757575',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '70%',
    height: 40,
  },
  btnSave: {
    height: 50,
    width: '100%',
    backgroundColor: 'blue',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnSaveUnActive: {
    height: 50,
    width: '100%',
    backgroundColor: '#A0A1B4',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  txtError: {
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    marginLeft: 140,
  },
  txtSave: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    margin: 20,
    marginLeft: 0,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
    // borderWidth: 1,
  },
});
