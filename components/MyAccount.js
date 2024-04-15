import { View, Text,Image,SafeAreaView, TouchableOpacity, ScrollView,TextInput,TouchableWithoutFeedback,Keyboard, Button, FlatList } from 'react-native'
import React, { useState,useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet'



const MyAccount = () => {
    const navigation=useNavigation()


    const [FullName,SetFullName] = useState('زانیار فرهاد بهرام')
    const [PhoneNumber,SetPhoneNumber]=useState('750 352 3626')
    const [email,setEmail] = useState('zanyarfarhad17@gmail.com')
    const [password,setPassword] = useState('12345678')
    const [city,setCity] = useState("erbil")

    const cityData=[
      {key:"1",value:"هەولێر"},
      {key:"2",value:"سلێمانی"},
      {key:"3",value:"دهۆک"},
    ]

    const bottomSheetmodalRef = useRef(null)

    const snapPoints=["35%","48%","75%"]

    function handlePresentModal(){
      bottomSheetmodalRef.current?.present()
    }




  return (
    <>
     <BottomSheetModalProvider>
        <View className="mt-0 h-[400] w-[100%] absolute z-0">
          <Image source={assets.LawyerProfileBack} resizeMode='cover' className="h-[400] w-[100%]" />
        </View>

        <View className=" items-end mx-5">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="w-9 mt-5">
           <Image source={assets.closebuttonwhite} resizeMode='contain' className="h-9 w-9" />
        </TouchableOpacity>
        </View>

        <View className="flex-row-reverse items-end mt-7 ml-10">
           <Image source={assets.accountwhite} resizeMode='contain' className="h-11 w-11" />
           <Text className="font-[Bold] text-white text-2xl pt-2 mr-3">هەژماری من</Text>
        </View>

        <ScrollView className="bg-gray-50 w-[100%] h-[auto] mt-7 rounded-t-3xl flex-1" showsVerticalScrollIndicator={false}>
          <View className="mt-5 pb-10">

            <View className="items-end mr-5">

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                                          accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">ناوی سیانی</Text>
                    <TextInput 
                        value={FullName}
                        onChangeText={SetFullName}
                        className=" w-4/5 h-12 mt-2 rounded-lg bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3"
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
                        className=" w-4/5 h-12 mt-2 rounded-lg bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3"
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                                          accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <Text className="font-[Bold] pt-1 text-base">ئیمەڵ</Text>
                    <TextInput 
                        value={email}
                        onChangeText={setEmail}
                        className=" w-4/5 h-12 mt-2 rounded-lg bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3"
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                                          accessible={false}>
                <View className="items-end mt-5 w-[100%]">
                    <View className="flex-row items-center justify-between w-[80%]">
                      <TouchableOpacity>
                        <Image source={assets.showeyegreen} resizeMode="contain" className="h-10 w-10" />
                      </TouchableOpacity>
                        <Text className="font-[Bold] pt-1 text-base">وشەی نهێنی</Text>
                    </View>
                    <TextInput 
                        value={password}
                        onChangeText={setPassword}
                        className=" w-4/5 h-12 mt-2 rounded-lg bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3"
                    />
                </View>
                </TouchableWithoutFeedback>









             
                <View className="mt-5 w-[80%] items-end">
                  <Text className="font-[Bold] pt-1 text-base">شار</Text>

                  <TouchableOpacity onPress={handlePresentModal} className="h-12 w-[80%] mt-2 rounded-lg justify-center bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3">
                    <Text className="text-right">{city}</Text>
                  </TouchableOpacity>
                </View>

                  






                
                

            </View>

            <View className="items-center">
                <TouchableOpacity className="bg-[#06755d] mt-9 h-10 w-36 justify-center items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">نوێکردنەوە</Text>
                </TouchableOpacity>



                <TouchableOpacity className="bg-red-600 mt-11 h-10 w-40 justify-center items-center shadow rounded-lg">
                    <Text className="font-[Bold] text-white text-lg pt-1">سڕینەوەی هەژمار</Text>
                </TouchableOpacity>
            </View>

                  

                
          </View>
        </ScrollView>        
            <BottomSheetModal
                    ref={bottomSheetmodalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{borderRadius:30}}
                    style={{backgroundColor:"white",
                    borderRadius:30,
                      shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24,}}
                  >



                    <View className="items-end mt-5">
                      <Text className="font-[Bold] text-lg mr-6 pt-1">شارەکەت هەڵبژێرە</Text>
                      <FlatList
                       data={cityData}
                       keyExtractor={item=> item.key}
                       renderItem={({item})=>{
                        return(
                          <View className="mx-8 my-3 bg-white shadow w-28 h-8 rounded-md items-end justify-center">
                            <Text className="fons-[Bold] text-lg pr-2">{item.value}</Text>
                          </View>
                        )
                       }}
                      />
                    </View>
            </BottomSheetModal>
       </BottomSheetModalProvider>
    </>
  )
}

export default MyAccount