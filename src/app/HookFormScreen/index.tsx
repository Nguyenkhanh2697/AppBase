import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Switch,
} from 'react-native';

let count = 0;

type FormValue = {
  name: string;
  phoneNumber: string;
  email: string;
};
const HookFormScreen = () => {
  const navigation = useNavigation();

  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
    setIsEnabled(previousState => !previousState);
  };
  const {t, i18n} = useTranslation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValue>();

  const onSubmit = () => {
    Alert.alert('success');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Text>{t('back')}</Text> */}
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.txtHeader}>React Hook Form</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Switch
          trackColor={{false: '#767577', true: '#767577f'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {isEnabled === false ? 'Vn' : 'En'}
        </Text>
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 20,
          marginBottom: 30,
        }}>
        Render: {count++}
      </Text>

      <Text style={styles.label}>
        {t('name')} <Text style={{color: 'red'}}></Text>
        <Text style={{color: 'red'}}>*</Text>
      </Text>

      <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={t('name')}
            style={[
              styles.input,
              errors.name?.message
                ? {borderWidth: 1, borderColor: 'red'}
                : null,
            ]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{
          required: {
            value: true,
            message: t('errorNameRequired'),
            // message: 'Phải nhập tên',
          },
        }}
      />
      {errors.name && (
        <Text style={{color: 'red'}}>{errors.name?.message}</Text>
      )}
      <Text style={styles.label}>
        {t('email')}
        {/* Email */}
        <Text style={{color: 'red'}}>*</Text>
      </Text>
      <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={t('email')}
            // placeholder="Email"
            style={[
              styles.input,
              errors.email?.message
                ? {borderWidth: 1, borderColor: 'red'}
                : null,
            ]}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: {
            value: true,
            message: t('errorEmailRequired'),
            // message: 'Phải nhập email',
          },
          pattern: {
            value: regexEmail,
            message: t('errorEmail'),
            // message: 'Không đúng định dạng mail',
          },
        }}
      />
      <Text style={{color: 'red'}}>{errors.email?.message}</Text>
      <Text style={styles.label}>
        {t('phone')}
        {/* Số điện thoại */}
        <Text style={{color: 'red'}}>*</Text>
      </Text>
      <Controller
        defaultValue=""
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={t('phone')}
            // placeholder="Số điện thoại"
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
        name="phoneNumber"
        rules={{
          required: {
            value: true,
            message: t('errorPhoneRequired'),
            // message: 'Phải nhập số điện thoại',
          },
          pattern: {
            value: regexPhoneNumber,
            message: t('errorPhone'),
            // message: 'Không đúng định dạng số điện thoại',
          },
        }}
      />
      <Text style={{color: 'red', marginBottom: 30}}>
        {errors.phoneNumber?.message}
      </Text>
      <Button
        // title={'Lưu'}
        title={t('save')}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
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
