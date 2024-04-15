import { View, Text,SafeAreaView,TouchableOpacity,TextInput, Image } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import SearchOption from '../components/SearchOption'
import FilterOption from '../components/FilterOption'




const SearchScreen = () => {

  const navigation=useNavigation()


  const searchTabs =["Filter","Search"]

    const [activeTab,setActiveTab] =useState(searchTabs[0])

    const displayTabContent=()=>{
      switch (activeTab) {
        case "Filter":
         return <FilterOption/>
          break;
      
          case "Search":
         return <SearchOption/>
          break;
      }
    }



  return (
    <SafeAreaView className="bg-gray-50 flex-1">



      <View className="w-auto bg-gray-50 pb-7"
        style={{  shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15.00,
        
        elevation: 5,}}
      
      >



      <View className="items-end mx-10 mt-6">



          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={assets.closeXgray} resizeMode='contain' className="h-10 w-10"/>
          </TouchableOpacity>

          </View>


          <View>
            <View className="mt-6 flex-row items-center justify-center space-x-3"  
              
            >

              <TouchableOpacity className={activeTab==searchTabs[1] ? "bg-[#06755d] w-36 h-10 items-center justify-center rounded-lg": "border-2 border-[#06755d] w-36 h-10 items-center justify-center rounded-lg"}
                onPress={()=>setActiveTab(searchTabs[1])}
              >
                  <Text className={activeTab==searchTabs[1]?"font-[Bold] text-center text-lg pt-1 text-white":"font-[Bold] text-center text-lg pt-1 text-[#06755d]"}>گەڕان</Text>
              </TouchableOpacity>

              <TouchableOpacity className={activeTab==searchTabs[0] ? "bg-[#06755d] w-36 h-10 items-center justify-center rounded-lg": "border-2 border-[#06755d] w-36 h-10 items-center justify-center rounded-lg"}
                  onPress={()=>setActiveTab(searchTabs[0])}
              >
                  <Text className={activeTab==searchTabs[0]?"font-[Bold] text-center text-lg pt-1 text-white":"font-[Bold] text-center text-lg pt-1 text-[#06755d]"}>فلتەر</Text>
              </TouchableOpacity>

      </View>
  

      </View>
      </View>


      <View className="mt-10">


        {displayTabContent()}


      </View>


    </SafeAreaView>
  )
}

export default SearchScreen