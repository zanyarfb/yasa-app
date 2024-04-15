import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'


const PrsyarabawakanCardsHome = ({id,key,imgUrl,title,paragraph,publisherName}) => {

  const navigation=useNavigation()


  return (
        <TouchableOpacity  className=" ml-1 mr-4 mb-5" key={key} onPress={()=>navigation.navigate("PrsyarabawakanDetail",{id,key,imgUrl,title,paragraph,publisherName})}>
      <View className="h-[100] w-[200] rounded-lg bg-white shadow shadow-gray-400 justify-center items-center"  id={id}>
      <Image source={{uri:imgUrl}} resizeMode='cover' className="h-[100] w-[200] rounded-lg" />
    </View>
    </TouchableOpacity>
  )
}

export default PrsyarabawakanCardsHome