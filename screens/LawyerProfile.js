import { View, Text, ScrollView, SafeAreaView,Image, TouchableOpacity, Linking,Platform } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { LocationOfficeMapProfile,LocationOfficeProfile } from '../components/LocationOfficeProfile'
import { useRoute } from '@react-navigation/native'
import Lawyer_category from '../components/Lawyer_category'

const LawyerProfile = () => {
    const {
        params:{
            key,
            id,
            imgUrl,
            name,
            exper,
            city,
            level,
            degree,
            ofLocation,
            mobile,
            sendicateImg,
            longitude,
            latitude,
            email,
            facebook,
            instagram,
            tiktok,
            linkedin,
            twitter,

        }
    } = useRoute();
    

    const navigation=useNavigation()

    const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
     };


  return (
   
    <>
      <View className="mt-0 h-[400] w-[100%] absolute z-0">
        <Image source={assets.LawyerProfileBack} resizeMode='cover' className="h-[400] w-[100%]" />
      </View>
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="w-[100%] h-10 flex-row justify-between">

                <View>
                <TouchableOpacity onPress={()=> navigation.goBack()} >
                    <Image source={assets.backbuttonwhite} resizeMode='contain' className="h-10 w-10 ml-3" />
                </TouchableOpacity>
                </View>


                <View className="flex-row mr-4 space-x-4">
                <TouchableOpacity>
                    <Image source={assets.heartewhite} resizeMode='contain' className="h-10 w-10" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={assets.sharewhite} resizeMode='contain' className="h-10 w-10" />
                </TouchableOpacity>
                </View>


            </View>

            <View className="bg-gray-50 w-[100%] h-[auto] pb-24 mt-[100] flex-1 rounded-t-3xl" key={key}>

                    <View className=" justify-center -mt-[120] items-center w-[100%]">
                        <View className="h-[190] w-[190] shadow-lg shadow-gray-900/60 bg-gray-100 rounded-full">
                        <Image source={assets.AvatarMan} resizeMode='contain' className="h-[190] w-[190] rounded-full" />
                        </View> 
                    </View>

                    <View className="mt-3 justify-center items-center">
                        <View className="justify-center ml-4 items-center flex-row">
                            <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">پارێزەر</Text>
                            <Image source={assets.lawyericongreen} resizeMode='contain' className="h-8 w-8" />
                        </View>
                        <Text className="font-[Bold] text-gray-600 h-11 pt-2 text-xl">{name}</Text>
                    </View>

                    <View>

                    <View className="items-center">
                        <View className="flex-row justify-between mt-3 w-80">


                            <View className="bg-white rounded-lg shadow h-[90] w-36">
                                <View className="flex-row items-center justify-end">
                                    <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">بڕوانامە</Text>
                                    <Image source={assets.dgreegreen} resizeMode='contain' className="h-8 w-8"/>
                                </View>
                                <View className="w-36 justify-end items-end">
                                <Text className="font-[Bold] text-gray-600 h-10 pt-3 mr-7 text-base">{degree}</Text>
                                </View>
                            </View>



                            <View className="bg-white rounded-lg shadow h-[90] w-36">
                                <View className="flex-row items-center justify-end">
                                    <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">پلە</Text>
                                    <Image source={assets.levelgreen} resizeMode='contain' className="h-8 w-8"/>
                                </View>
                                <View className="w-36 justify-end items-end">
                                <Text className="font-[Bold] text-gray-600 h-10 pt-3 mr-7 text-base">{level}</Text>
                                </View>
                            </View>



                        </View>


                        <View className="flex-row justify-between mt-3 w-80">


                            <View className="bg-white rounded-lg shadow h-[90] w-36">
                                <View className="flex-row items-center justify-end">
                                    <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">ئەزموون</Text>
                                    <Image source={assets.experiencegreen} resizeMode='contain' className="h-8 w-8"/>
                                </View>
                                <View className="w-36 justify-end items-end">
                                <Text className="font-[Bold] text-gray-600 h-10 pt-3 mr-7 text-base">{exper} ساڵ</Text>
                                </View>
                            </View>



                            <View className="bg-white rounded-lg shadow h-[90] w-36">
                                <View className="flex-row items-center justify-end">
                                    <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">شوێن</Text>
                                    <Image source={assets.locationgreen} resizeMode='contain' className="h-8 w-8"/>
                                </View>
                                <View className="w-36 justify-end items-end">
                                <Text className="font-[Bold] text-gray-600 h-10 pt-3 mr-7 text-base">{city}</Text>
                                </View>
                            </View>



                        </View>

                        </View>

                        <View className="">
                            <LocationOfficeProfile ofLocation={ofLocation} className=""/>
                        </View>


                        <View className="mt-5 mx-5 items-end">
                            <Text className="font-[Bold] text-[#06755d]  h-10 pt-3 text-xl">پسپۆڕی</Text>

                            <View className="flex-row-reverse mt-2  h-[70] w-[290]">

                                {/* <View className=" border-2 border-[#06755d] h-[35] mr-4 rounded-md">
                                <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">تەڵاق</Text>
                                </View>

                                <View className="border-2 border-[#06755d] h-[35] mr-4 rounded-md">
                                <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">کۆمپانیا</Text>
                                </View>

                                <View className="border-2 border-[#06755d] h-[35] mr-4 rounded-md">
                                <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">قیسام شەرعی</Text>
                                </View> */}
                               <Lawyer_category lawyerId={id}/>

                                </View>
                        </View>

                        <View className="mt-5 mx-5 items-end">
                           <Text className="font-[Bold] text-[#06755d]  h-10 pt-3 text-xl">تۆڕەکۆمەڵایەتیەکان</Text>
                           <View className="flex-row-reverse my-2">
                             <TouchableOpacity onPress={()=> Linking.openURL(`${facebook}`)}>
                               <Image source={assets.facebookgray} resizeMode='contain' className=" h-14 w-14"/> 
                             </TouchableOpacity>

                             <TouchableOpacity onPress={()=> Linking.openURL(`${instagram}`)}>
                               <Image source={assets.instagramgray} resizeMode='contain' className="h-14 w-14 mr-3"/> 
                             </TouchableOpacity>

                             {/* <TouchableOpacity>
                               <Image source={assets.snapchatgray} resizeMode='contain' className="h-14 w-14 mr-4"/> 
                             </TouchableOpacity> */}
                           </View>
                        </View>
                        
                        {/* rsmi nasnama */}
                        <View className=" flex-1 mt-7">

                             <View className="items-end mr-5">

                               <Text className="font-[Bold] text-[#06755d] w-52 mt-5 h-10 pt-3 text-xl">وێنەی ناسنامەی سەندیکا</Text>

                             </View>
                            
                             <Image  source={assets.ImageSlider1} resizeMode='stretch' className=" bg-black w-11/12 mx-4 h-60 rounded-xl" />
                            
                        </View>

                        {/* naxsha map office */}
                        {/* <View className="mt-7 items-end">
                            <Text className="font-[Bold] text-[#06755d] mx-5 h-10 pt-3 text-xl">ناونیشانی ئۆفیس لەسەر نەخشە</Text>
                            <LocationOfficeMapProfile  className=""/>
                        </View> */}

                    </View>


            </View>

        </ScrollView>
        </SafeAreaView>
                     <View className=" flex-wrap">
                        <View className="flex-row justify-end bg-[#efefef] w-full h-20 shadow-md shadow-gray-700">


                                <View className="flex-row space-x-5">
                                <TouchableOpacity className="bg-[#0fb70f] mt-3 rounded-lg h-10"
                                        onPress={() => {
                                            Linking.openURL(
                                            'http://api.whatsapp.com/send?phone=' + `${mobile}`
                                            );
                                        }}
                                >
                                    <Text className="mt-2 mx-6 font-[Bold] text-white">وەتس ئەپ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-[#2162c1] mt-3 rounded-lg h-10"
                                                onPress={()=>{dialCall(mobile)}}
                                >
                                    <Text className="mt-2 mx-5 font-[Bold] text-white">مۆبایل</Text>
                                </TouchableOpacity>
                                </View>


                                <Text className="font-[Bold] text-gray-600 h-10 pt-4 mt-2 ml-5 mr-7 text-xl">بۆ پەیوەندی</Text>
                        </View>
                    </View>
                        
      
      
      </>
  )
}

export default LawyerProfile