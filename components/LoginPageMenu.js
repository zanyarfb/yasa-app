import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import PhoneNumberLogin from './PhoneNumberLogin'
import EmailLogin from './EmailLogin'



const LoginPageMenu = () => {
    const navigation=useNavigation()

    const loginTabs =["PhoneNumber","Email"]

    const [activeTab,setActiveTab] =useState(loginTabs[0])

    const displayTabContent=()=>{
      switch (activeTab) {
        case "PhoneNumber":
         return <PhoneNumberLogin/>
          break;
      
          case "Email":
         return <EmailLogin/>
          break;
      }
    }


    


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
           <Image source={assets.loginwhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">چوونەژوورەوە</Text>
        </View>

        <ScrollView className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
          <View >

            <View className="mt-6 flex-row items-center justify-center space-x-3">


            <TouchableOpacity className={activeTab==loginTabs[1] ? "bg-[#06755d] w-36 h-10 items-center justify-center rounded-lg": "border-2 border-[#06755d] w-36 h-10 items-center justify-center rounded-lg"}
                   onPress={()=>setActiveTab(loginTabs[1])}
                >
                    <Text className={activeTab==loginTabs[1]?"font-[Bold] text-center text-lg pt-1 text-white":"font-[Bold] text-center text-lg pt-1 text-[#06755d]"}>ئیمەڵ</Text>
                </TouchableOpacity>

                <TouchableOpacity className={activeTab==loginTabs[0] ? "bg-[#06755d] w-36 h-10 items-center justify-center rounded-lg": "border-2 border-[#06755d] w-36 h-10 items-center justify-center rounded-lg"}
                    onPress={()=>setActiveTab(loginTabs[0])}
                >
                    <Text className={activeTab==loginTabs[0]?"font-[Bold] text-center text-lg pt-1 text-white":"font-[Bold] text-center text-lg pt-1 text-[#06755d]"}>ژمارە مۆبایل</Text>
                </TouchableOpacity>

                

            </View>


            {displayTabContent()}

            {/* <PhoneNumberLogin/>
            <EmailLogin/> */}
                
          </View>
        </ScrollView>        
    </>
  )
}

export default LoginPageMenu