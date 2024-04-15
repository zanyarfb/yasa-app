import { View, Text,Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'






const Header = () => {

  const navigation=useNavigation()

  





  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center px-5 h-12 ">
      <TouchableOpacity onPress={()=> navigation.navigate("MenuScreen")}>
      <Image
       source={assets.menuIcon}
       resizeMode='contain'
       className="h-10 w-10 "
      />
    </TouchableOpacity>
    

    
    <TouchableOpacity onPress={()=> navigation.navigate('Home')}> 
      <Image
       source={assets.logo}
       resizeMode='contain'
       className="h-20 w-20"
       />
    </TouchableOpacity>
    
       </View>

       </SafeAreaView>
  
  
  )
}

export default Header