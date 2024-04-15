import { View, Text,Image,Linking,Platform, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'

const MenuScreen = () => {

const navigation = useNavigation()


const dialCall = (number) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
  else {phoneNumber = `telprompt:${number}`; }
  Linking.openURL(phoneNumber);
};

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
       <View className=" items-end mx-5">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 mt-5">
           <Image source={assets.backbuttongreentoright} resizeMode='contain' className="h-10 w-10" />
        </TouchableOpacity>
       </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-12 mr-2">

         {/* MyAccount */}
        {/* <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("MyAccount")}>
           <Image source={assets.accountgreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">هەژماری من</Text>
        </TouchableOpacity> */}

        <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("Notifications")}>
           <Image source={assets.notificationgreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">ئاگادارییەکان</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("Favorite")}>
           <Image source={assets.fav_iconGreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">دڵخوازەکان</Text>
        </TouchableOpacity> */}



         {/* Settings */}
        {/* <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("Settings")}>
           <Image source={assets.settinggreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">ڕێکخستنەکان</Text>
        </TouchableOpacity> */}


        <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("AboutUs")}>
           <Image source={assets.aboutusgreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">دەربارەی ئێمە</Text>
        </TouchableOpacity>


        <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("WorkWithUs")}>
           <Image source={assets.workwithusgreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">لەگەڵ ئێمە کاربکە</Text>
        </TouchableOpacity>


        <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("TalkWithUs")}>
           <Image source={assets.chatwithusgreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">لەگەڵ ئێمە قسە بکە</Text>
        </TouchableOpacity>


         {/* login */}
        {/* <TouchableOpacity className="items-end mt-5 flex-row-reverse" onPress={()=>navigation.navigate("LoginPageMenu")}>
           <Image source={assets.logingreen} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-gray-700 text-xl pt-1 mr-3">چوونەژوورەوە</Text>
        </TouchableOpacity> */}




        </View>
       




       <View className="mt-10 items-center">
        <View className="flex-row space-x-5">
          <TouchableOpacity>
             <Image source={assets.facebookgreen} resizeMode='contain' className="h-14 w-14" />
          </TouchableOpacity>

          <TouchableOpacity>
             <Image source={assets.instagramgreen} resizeMode='contain' className="h-14 w-14" />
          </TouchableOpacity>

          <TouchableOpacity>
             <Image source={assets.twittergreen} resizeMode='contain' className="h-14 w-14" />
          </TouchableOpacity>

          <TouchableOpacity>
             <Image source={assets.linkedingreen} resizeMode='contain' className="h-14 w-14" />
          </TouchableOpacity>
        </View>


        <View className="flex-row mt-6 space-x-5">
          <TouchableOpacity>
            <Image source={assets.emailgreen} resizeMode='contain' className=" h-16 w-16"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{dialCall(7514473727)}}>
            <Image source={assets.phonegreen} resizeMode='contain' className=" h-16 w-16"/>
          </TouchableOpacity>
        </View>





         {/* version text */}
        <Text className="mt-6 text-[#06755d] font-[Regular]">V1.0</Text>
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default MenuScreen



