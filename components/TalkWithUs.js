import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView,TextInput,TouchableWithoutFeedback,Keyboard, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'



const TalkWithUs = () => {
    const navigation=useNavigation()


    const [yasaFeedBack,setYasaFeedBack] = useState('')
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
           <Image source={assets.chatwithuswhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">لەگەڵ ئێمە قسە بکە</Text>
        </View>

        <View className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
          <View className="items-end mr-5">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                     accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">هەڵسەنگاندنی ئەپی یاسا</Text>
                    <TextInput 
                        value={yasaFeedBack}
                        multiline={true}
                        numberOfLines={10}
                        onChangeText={setYasaFeedBack}
                        placeholder="شتێک بنووسە"
                        placeholderTextColor="grey"
                        className=" w-4/5 h-48 mt-2 rounded-lg bg-white shadow font-[Regular] px-3 text-right text-gray-500"
                    />
                </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity className="bg-[#06755d] mt-9 h-10 w-28 justify-center items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">ناردن</Text>
                </TouchableOpacity>
          </View>    
        </View>    
    </>
  )
}

export default TalkWithUs