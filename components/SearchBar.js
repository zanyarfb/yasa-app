import { View, Text,TouchableOpacity,Image } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import FilterOption from './FilterOption'
import SearchOption from './SearchOption'

const SearchBar = () => {

  const navigation=useNavigation()




    

  return (
    <View className="flex-1 ">
      <View className="">
        <TouchableOpacity 
          onPress={()=>navigation.navigate("SearchScreen")}
          className="flex-row justify-between px-4 py-1 h-[38px] items-center bg-white my-3 mx-5 rounded-lg shadow-md">
            <Text className="text-s text-center h-[21px] text-gray-300 left-[135px]">لێرە گەڕان بکە</Text>
            <Image
             source={assets.searchGreen}
             resizeMode='contain'
             className="h-[23px] w-[23px]"
            />
        </TouchableOpacity>
      </View>


     
    </View>
  )
}

export default SearchBar