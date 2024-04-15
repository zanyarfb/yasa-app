import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'



const Notifications = () => {
    const navigation=useNavigation()
  return (
    <>
        <View className="mt-0 bg-black h-[400] w-[100%] absolute z-0">
          <Image source={assets.LawyerProfileBack} resizeMode='cover' className="h-[400] w-[100%]" />
        </View>

        <View className=" items-end mx-5">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="w-9 mt-5">
           <Image source={assets.closebuttonwhite} resizeMode='contain' className="h-9 w-9" />
        </TouchableOpacity>
        </View>

        <View className="flex-row-reverse items-end mt-7 ml-10">
           <Image source={assets.notificationwhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">ئاگادارییەکان</Text>
        </View>


        <View className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1 items-center justify-center">
            <Image source={assets.notificationringyallow} resizeMode='contain' className="w-36 h-36"/>
            <Text className="font-[Bold] text-gray-700 text-2xl mt-4 py-3">هێچ ئاگادرکردنەوەیەکت نییە</Text>
        </View>



        {/* <ScrollView className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
          <View >
                
          </View>
        </ScrollView>         */}
    </>
  )
}

export default Notifications