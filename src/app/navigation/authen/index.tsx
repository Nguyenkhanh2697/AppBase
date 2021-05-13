import React, {memo, useEffect} from 'react';
import {Home} from '@features/authentication/home';
import {DetailHome} from '@features/authentication/home/detailHome';
import {DetailItem} from '@features/authentication/home/detailItem';
import {APP_SCREEN} from '@navigation/screenTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import isEqual from 'react-fast-compare';
import {useRoute} from '@react-navigation/native';
import HookFormScreen from './../../HookFormScreen/index';

const MainStack = createStackNavigator();
const MainTestStack = createStackNavigator();
const MainTestSearchStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// const BottomTabScreen = (navigation: any) => {
//   const route = useRoute();
//   useEffect(() => {
//     if (route.state) {
//       navigation.setOptions({
//         headerShown: route.state.index === 0 ? false : true,
//         headerTitle:
//           route.state.index === 0
//             ? APP_SCREEN.HOME1
//             : route.state.index === 1
//             ? APP_SCREEN.HOME2
//             : route.state.index === 2
//             ? APP_SCREEN.HOME3
//             : route.state.index === 3
//             ? APP_SCREEN.HOME4
//             : undefined,
//       });
//     }
//   }, [navigation, route]);

//   return (
//     <BottomTab.Navigator
//       screenOptions={{}}
//       tabBarOptions={{
//         allowFontScaling: false,
//         activeTintColor: '#00aca1',
//       }}>
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: APP_SCREEN.HOME1,
//           // tabBarIcon: ({color}) => (
//           //   <Icon name={'ios-home'} color={color} size={22} />
//           // ),
//         }}
//         name={APP_SCREEN.HOME1}
//         component={Home}
//       />
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: APP_SCREEN.HOME2,
//           // tabBarIcon: ({color}) => (
//           //   <Icon name={'ios-home'} color={color} size={22} />
//           // ),
//         }}
//         name={APP_SCREEN.HOME2}
//         component={Home2}
//       />
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: APP_SCREEN.HOME3,
//           // tabBarIcon: ({color}) => (
//           //   <Icon name={'ios-home'} color={color} size={22} />
//           // ),
//         }}
//         name={APP_SCREEN.HOME3}
//         component={Home3}
//       />
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: APP_SCREEN.HOME4,
//           // tabBarIcon: ({color}) => (
//           //   <Icon name={'ios-home'} color={color} size={22} />
//           // ),
//         }}
//         name={APP_SCREEN.HOME4}
//         component={Home4}
//       />
//     </BottomTab.Navigator>
//   );
// };
const MainTest = () => {
  return (
    <MainTestStack.Navigator
      initialRouteName={APP_SCREEN.DETAIL_HOME}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <MainStack.Screen
        // options={{headerShown: false}}
        name={APP_SCREEN.HOME1}
        component={Home}
      />
      <MainStack.Screen
        options={{headerShown: false}}
        name={APP_SCREEN.HOOK_FORM}
        component={HookFormScreen}
      />
      <MainStack.Screen
        // options={{headerShown: false}}
        name={APP_SCREEN.DETAIL_HOME}
        component={DetailHome}
      />
      <MainStack.Screen
        // options={{headerShown: false}}
        name={APP_SCREEN.DETAIL_ITEM}
        component={DetailItem}
      />
    </MainTestStack.Navigator>
  );
};
const MainScreenComponent = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      // options={{headerShown: false}}
      name={APP_SCREEN.HOME1}
      component={MainTest}
    />
  </MainStack.Navigator>
);
export const MainScreen = memo(MainScreenComponent, isEqual);
