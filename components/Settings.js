import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'



const Settings = () => {
    const navigation=useNavigation()
  return (
    <>
        <View className="mt-0 h-[400] w-[100%] absolute z-0">
          <Image source={assets.LawyerProfileBack} resizeMode='cover' className="h-[400] w-[100%]" />
        </View>

        <View className=" items-end mx-5">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="w-9 mt-5">
           <Image source={assets.closebuttonwhite} resizeMode='contain' className="h-9 w-9" />
        </TouchableOpacity>
        </View>

        <View className="flex-row-reverse items-end mt-7 ml-10">
           <Image source={assets.settingwhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">ڕێکخستنەکان</Text>
        </View>

        <View className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
            <View className="items-end mt-20">


                <TouchableOpacity>
                <View className="flex-row items-end mt-10 mr-10">
                    <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">زمان</Text>
                    <Image source={assets.languagegray} resizeMode='contain' className="h-9 w-9" />
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View className="flex-row items-end mt-10 mr-10">
                    <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">دۆخی ڕووناکی</Text>
                    <Image source={assets.darkandlightgray} resizeMode='contain' className="h-9 w-9" />
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View className="flex-row items-end mt-10 mr-10">
                    <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">چوونەدەرەوە</Text>
                    <Image source={assets.logoutgray} resizeMode='contain' className="h-9 w-9" />
                </View>
                </TouchableOpacity>
            </View>
        </View>    
    </>
  )
}

export default Settings