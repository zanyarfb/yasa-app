import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import {TailwindProvider} from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from 'expo-font'
import { Home } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import LawyerProfile from './screens/LawyerProfile';
import MenuScreen from './screens/MenuScreen';
import MyAccount from './components/MyAccount';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import AboutUs from './components/AboutUs';
import WorkWithUs from './components/WorkWithUs';
import TalkWithUs from './components/TalkWithUs';
import LoginPageMenu from './components/LoginPageMenu';
import SearchScreen from './screens/SearchScreen';
import PrsyarabawakanPage from './components/PrsyarabawakanPage';
import PrsyaraBawakanDetail from './components/PrsyaraBawakanDetail';
import TwezhinawayzanstyDetail from './components/TwezhinawayzanstiDetail';
import TwezhinawayzanstyPage from './components/TwezhinawayzanstiPage';
import FilterResult from './screens/FilterResult';
import FilterdByCityHome from './screens/FilterdByCityHome';
import LoadingScreen from './screens/LoadingScreen';

const Stack = createStackNavigator();

const App =()=>{
  const [loaded] = useFonts({
    Regular:require("./assets/fonts/Rabar_009.ttf"),
    Bold:require("./assets/fonts/Rabar_008.ttf")
  });

    if(!loaded) return null;



  return(
    <NavigationContainer>
      <StatusBar backgroundColor="white" translucent={false} />
      <TailwindProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}
        initialRouteName='LoadingScreen'
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="LawyerProfile" component={LawyerProfile} />
        <Stack.Screen name='MenuScreen' component={MenuScreen} options={{gestureDirection:'horizontal-inverted'}} />
        <Stack.Screen name="MyAccount" component={MyAccount} options={{presentation:'modal'}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{presentation:'modal'}}/>
        <Stack.Screen name="Settings" component={Settings} options={{presentation:'modal'}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{presentation:'modal'}}/>
        <Stack.Screen name="WorkWithUs" component={WorkWithUs} options={{presentation:'modal'}}/>
        <Stack.Screen name="TalkWithUs" component={TalkWithUs} options={{presentation:'modal'}}/>
        <Stack.Screen name="LoginPageMenu" component={LoginPageMenu} options={{presentation:'modal'}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="PrsyarabawakanPage" component={PrsyarabawakanPage} options={{gestureDirection:'horizontal-inverted'}}/>
        <Stack.Screen name="PrsyarabawakanDetail" component={PrsyaraBawakanDetail}/>
        <Stack.Screen name="TwezhinawayzanstiPage" component={TwezhinawayzanstyPage} options={{gestureDirection:'horizontal-inverted'}}/>
        <Stack.Screen name="TwezhinawayzanstiDetail" component={TwezhinawayzanstyDetail}/>
        <Stack.Screen name="FilterResult" component={FilterResult}/>
        <Stack.Screen name="FilterdByCityHome" component={FilterdByCityHome}/>
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App;
