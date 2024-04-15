import { View, Text,Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'


export const LocationOfficeProfile = ({ofLocation}) => {
  return (
    <View className="w-[100%] items-center mt-5 ">
        <View className="bg-white rounded-lg shadow h-[90] w-80">
          <View className="flex-row items-center justify-end">
                <Text className="font-[Bold] text-[#06755d] h-10 pt-3 text-xl">ناونیشانی ئۆفیس</Text>
                <Image source={assets.officelocationgreen} resizeMode='contain' className="h-8 w-8"/>
          </View>
          <View className="w-80 justify-end items-end">
                 <Text className="font-[Bold] text-gray-600 h-10 pt-3 mr-7  text-base">{ofLocation}</Text>
          </View>
        </View>
    </View>
  )
}


export const LocationOfficeMapProfile =()=>{
    return(
        <View>
            <Image source={assets.ChonBajBdam} resizeMode='cover' className="mx-5 mt-4 w-96 h-60 rounded-xl"/>
        </View>
    )
}

