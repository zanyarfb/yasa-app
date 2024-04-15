import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'


const TwezhinawayzanstiCardsPage = ({id,key,imgUrl,title,paragraph,publisherName,universty}) => {

    const navigation=useNavigation()

  return (
        <TouchableOpacity  className="mb-9" key={key} onPress={()=>navigation.navigate("TwezhinawayzanstiDetail",{id,key,imgUrl,title,paragraph,publisherName,universty})}>
      <View className="h-[150] w-[330] rounded-lg bg-white shadow shadow-gray-400 justify-center items-center"  id={id}>
      <Image source={{uri:imgUrl}} resizeMode='cover' className="h-[150] w-[330] rounded-lg" />
    </View>
    </TouchableOpacity>
  )
}

export default TwezhinawayzanstiCardsPage