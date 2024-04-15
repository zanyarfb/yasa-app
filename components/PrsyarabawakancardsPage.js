import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'


const PrsyarabawakanCardsPage = ({id,key,imgUrl,title,paragraph,publisherName}) => {

    const navigation=useNavigation()

  return (
        <TouchableOpacity  className="mb-9" key={key} onPress={()=>navigation.navigate("PrsyarabawakanDetail",{id,key,imgUrl,title,paragraph,publisherName})}>
      <View className="h-[150] w-[330] rounded-lg bg-white shadow shadow-gray-400 justify-center items-center"  id={id}>
      <Image source={{uri:imgUrl}} resizeMode='cover' className="h-[150] w-[330] rounded-lg" />
    </View>
    </TouchableOpacity>
  )
}

export default PrsyarabawakanCardsPage