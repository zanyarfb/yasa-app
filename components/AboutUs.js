import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'



const AboutUs = () => {
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
           <Image source={assets.aboutuswhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">دەربارەی ئێمە</Text>
        </View>

        <ScrollView className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
          <View  className="items-end">
                <View>
                <Text className="font-[Regular] mr-5 mt-6 text-lg text-center" style={{lineHeight:35}}>یاسا ئەپێکە بۆ کۆکردنەوەی پاریزەر و نوسینگە و 
                    کۆمپانیاکانی کوردستان، تا هەر کێشەکت هەبوو
                    بەزووترین کات پارێزەر بدۆزیتەوە بۆ کێشەکەت
                    </Text>
                </View>

                <View className="items-end mr-5">
                <Text className="font-[Bold] pt-1 mt-10 text-lg">لەسۆشیەڵ میدیا ڵەگەڵمان بن</Text>

                <View className="items-center mt-5">
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
                </View>

                </View>



                <View className="items-end mr-5">
                <Text className="font-[Bold] pt-1 mt-10 text-lg">پەیوەندیمان پێوە بکەن</Text>
                    <TouchableOpacity>
                        <Image source={assets.phonegreen} resizeMode='contain' className=" h-16 w-16"/>
                    </TouchableOpacity>
                </View>


                <View className="items-end mr-5">
                <Text className="font-[Bold] pt-1 mt-5 text-lg">ئیمەڵ</Text>
                    <TouchableOpacity>
                        <Image source={assets.emailgreen} resizeMode='contain' className=" h-16 w-16"/>
                    </TouchableOpacity>
                </View>


                <View className="items-end mr-5">
                <Text className="font-[Bold] pt-1 mt-6 text-lg">پەرەپێدراوە لەلایەن کۆمپانیای</Text>
                    <TouchableOpacity className="bg-gray-50 shadow rounded-lg">
                        <Image source={assets.logo} resizeMode='contain' className=" h-20 w-36"/>
                    </TouchableOpacity>
                </View>


          </View>
            <View className="items-center justify-center">
            <Text className="mt-3 text-[#06755d] font-[Regular]">V1.0</Text>
            </View>
        </ScrollView>        
    </>
  )
}

export default AboutUs