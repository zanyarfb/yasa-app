import { View, Text,TextInput,TouchableOpacity,Image,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, { useState } from 'react'
import { assets } from '../constants'

const PhoneNumberLogin = () => {
    const [PhNumLogin,setPhNumLogin] = useState('')
    const [PasswordLogin,setPasswordLogin] = useState('')
  return (
 <>
 
 <View className="items-end mt-6 mr-5">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">ژمارە مۆبایل</Text>
                    <TextInput 
                        value={PhNumLogin}
                        onChangeText={setPhNumLogin}
                        placeholder="750 000 0000"
                        placeholderTextColor="grey"
                        keyboardType='numeric'
                        className=" w-4/5 h-12 mt-2 rounded-lg text-right bg-white shadow px-3"
                    />
                </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">وشەی نهێنی</Text>
                    <TextInput 
                        value={PasswordLogin}
                        onChangeText={setPasswordLogin}
                        placeholder="وشەی نهێنی"
                        placeholderTextColor="grey"
                        
                        className=" w-4/5 h-12 mt-2 rounded-lg text-right bg-white shadow px-3"
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity className="mt-4">
                <Text className="font-[Bold] text-center text-base pt-1 text-[#06755d]">وشەی نهێنیم بیرچۆتەوە</Text>
                </TouchableOpacity>
    </View>

    <View className="items-center w-[100%] pb-16 mt-7">
                <TouchableOpacity className="bg-[#06755d] w-52 h-10 justify-center items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">چوونەژوورەوە</Text>
                </TouchableOpacity>


                <View className="items-center justify-center flex-row space-x-5 mt-7">
                        <Text className="font-[Bold] text-[#06755d] text-lg ">______________</Text>
                        <Text className="font-[Bold] text-gary-800 text-lg pt-2">یان</Text>
                        <Text className="font-[Bold] text-[#06755d] text-lg">______________</Text>
                </View>

                <TouchableOpacity className="flex-row mt-5 w-[50%] justify-between items-center p-2 rounded-md bg-white shadow">
                    <Image source={assets.logingray} resizeMode="contain" className=" h-9 w-9"/>
                    <Text  className="font-[Bold] text-gary-800 text-lg pt-1">گووگڵ</Text>
                </TouchableOpacity>


                <TouchableOpacity className="flex-row mt-5 w-[50%] justify-between items-center p-2 rounded-md bg-white shadow">
                    <Image source={assets.logingray} resizeMode="contain" className=" h-9 w-9"/>
                    <Text  className="font-[Bold] text-gary-800 text-lg pt-1">فەیس بووک</Text>
                </TouchableOpacity>


                <TouchableOpacity className="bg-[#06755d] mt-7 w-52 h-10 justify-center items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">خۆ تۆمارکردن</Text>
                </TouchableOpacity>

            </View>
 
 
 </>
  )
}

export default PhoneNumberLogin