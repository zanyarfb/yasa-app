import { View, Text,Image,SafeAreaView,ActivityIndicator,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { assets,PrsyaraBawakanData } from '../constants'
import { useNavigation } from '@react-navigation/native'


import { useRoute } from '@react-navigation/native'


const TwezhinawayzanstyDetail = () => {
    const {
        params:{
           key,
           id,
           title,
           paragraph,
           imgUrl,
           publisherName,
           universty

        }
    } = useRoute();

    const navigation=useNavigation()



  return (
    <SafeAreaView className="bg-gray-50 flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>

        <View className="mt-0 h-[400] w-[100%] absolute z-0">
          <Image source={assets.LawyerProfileBack} resizeMode='cover' className="h-[400] w-[100%]" />
        </View>

        <View className=" items-start mx-5">
      <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 mt-5">
           <Image source={assets.backbuttonwhite} resizeMode='contain' className="h-10 w-10" />
        </TouchableOpacity>
      </View>


      <View className="bg-gray-50 w-[100%] h-[auto] mt-24 pb-8 rounded-t-3xl flex-1">
        <View className="mt-3 mr-3 items-end">
            <Text className="font-[Bold] text-gray-800 text-xl pt-2 mr-2">{title}</Text>
            <Text className="font-[Regular] text-gray-800 text-base mt-12 pt-2 mr-2 text-right">{paragraph}</Text>
            <Text className="font-[Bold] mt-9 mr-2 text-lg">قوتابی:  {publisherName}</Text>
            <Text className="font-[Bold] mt-9 mr-2 text-lg">زانکۆ:  {universty}</Text>
        </View>
      </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default TwezhinawayzanstyDetail