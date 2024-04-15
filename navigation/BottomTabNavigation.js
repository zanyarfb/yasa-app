import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { Home,Favorites,LawyersPage,Publications } from '../screens';
import { assets } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarHideOnKeyboard:true,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        backgroundColor:"#efefef",
        width:"auto",
        elevation:0,
        //height:60,
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',


        shadowColor:'#000000',
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:5,
        
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen 
         name="Home"
         component={Home} 
         options={{
            tabBarIcon: ({focused})=>{
                return <Image
                         source={focused ? assets.homeNavigationGreen : assets.homeNavigation}
                         resizeMode='contain'
                         className="h-[60px] w-[50px]"
                       />
            }
         }}
        />

<Tab.Screen 
         name="Publications"
         component={Publications} 
         options={{
            tabBarIcon: ({focused})=>{
                return <Image
                         source={focused ? assets.blawkrawakanNavigationGreen : assets.blawkrawakanNavigation}
                         resizeMode='contain'
                         className="h-[60px] w-[50px]"
                       />
            }
         }}
        />

<Tab.Screen 
         name="LawyersPage"
         component={LawyersPage} 
         options={{
            tabBarIcon: ({focused})=>{
                return <Image
                         source={focused ? assets.lawyerNavigationGreen : assets.lawyerNavigation}
                         resizeMode='contain'
                         className="h-[60px] w-[50px]"
                       />
            }
         }}
        />

<Tab.Screen 
         name="Favorite"
         component={Favorites} 
         options={{
            tabBarIcon: ({focused})=>{
                return <Image
                         source={focused ? assets.favNavigationGreen : assets.favNavigation}
                         resizeMode='contain'
                         className="h-[60px] w-[50px]"
                       />
            }
         }}
        />
    </Tab.Navigator>
  )
}


const styles =StyleSheet.create({
    shadow1:{
        shadowColor:'#000000',
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:0,
    elevation:5
    },
})

export default BottomTabNavigation