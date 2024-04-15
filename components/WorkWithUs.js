import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView, TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'



const WorkWithUs = () => {
    const navigation=useNavigation()

    const [FullName,SetFullName]= useState('')
    const [City,SetCity]= useState('')
    const [Gender,SetGender]= useState('')
    const [PhoneNumber,SetPhoneNumber]= useState('')


    const DismissKeybord=({children})=>{
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
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
           <Image source={assets.workwithuswhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">لەگەڵ ئێمە کاربکە</Text>
        </View>


        <View className="bg-gray-50 w-[100%] h-[auto] mt-7 pb-20 rounded-t-3xl flex-1">


            <View className="mt-5 mr-7 items-end">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
    accessible={false}>
                <View className="items-end">
                   <Text className="font-[Bold] pt-1 text-base">مەرجەکانی کارکردن لەگەڵ ئێمە</Text>
                   <Text className="font-[Regular] pt-1 text-sm">١- پێویستە پارێزەربێت</Text>
                   <Text className="font-[Regular] pt-1 text-sm">٢- ناسنامەی سەندیکای پارێزەرانی کوردستان هەبێت</Text>
                   <Text className="font-[Regular] pt-1 text-sm">٣- گرێبەستێکی یاسایی لە نێوان ئەپی یاسا و پارێزەرەکە دەبێت</Text>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
    accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">ناوی سیانی</Text>
                    <TextInput 
                        value={FullName}
                        onChangeText={SetFullName}
                        className=" w-4/5 h-9 mt-2 rounded-lg bg-white shadow font-[Regular] px-3"
                    />
                </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
    accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">شار</Text>
                    <TextInput 
                        value={City}
                        onChangeText={SetCity}
                        className=" w-4/5 h-9 mt-2 rounded-lg bg-white shadow font-[Regular] px-3"
                    />
                </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
    accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">ژمارە مۆبایل</Text>
                    <TextInput 
                        value={PhoneNumber}
                        onChangeText={SetPhoneNumber}
                        keyboardType='numeric'
                        className=" w-4/5 h-9 mt-2 rounded-lg bg-white shadow px-3"
                    />
                </View>
                </TouchableWithoutFeedback>



                
            </View>


            <View className="items-center w-[100%] mt-7">
                <TouchableOpacity className="bg-[#06755d] w-28 items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">ناردن</Text>
                </TouchableOpacity>
            </View>

            <View className="items-end mr-7">
            <Text className="font-[Bold] pt-1 mt-11 text-lg">بۆ وردەکاری زیاتر پەیوەندیمان پێوە بکەن</Text>
                    <TouchableOpacity>
                        <Image source={assets.phonegreen} resizeMode='contain' className=" h-16 w-16"/>
                    </TouchableOpacity>
            </View>

        </View>

        {/* <ScrollView className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1">
          <View >
                
          </View>
        </ScrollView>         */}
    </>
  )
}

export default WorkWithUs