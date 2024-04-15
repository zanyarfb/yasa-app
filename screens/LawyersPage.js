import { View, Text, SafeAreaView, Image,FlatList,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { assets, LawyerData } from '../constants'
import LawyersCard from '../components/LawyersCard'
import LawyersCardsLawyersPage from '../components/LawyersCardsLawyersPage'

const LawyersPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header/>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 pb-20 ">
          <SearchBar/>
          
          <View className="h-[200] w-[auto] mx-4 mt-2 shadow bg-white rounded-xl" >
            <Image
             source={assets.ImageSlider2}
             resizeMode='cover'
             className="h-[200] w-[100%]  rounded-xl"
             />
          </View>

         

       <View className="flex-1 mt-3">
        
         <LawyersCardsLawyersPage/>

       </View>
     

        </View>

       </ScrollView>
       
    </SafeAreaView>
  )
}

export default LawyersPage