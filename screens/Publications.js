import { View, Text,SafeAreaView,Image,ActivityIndicator,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import PrsyarabawakanPubPage from '../components/PrsyarabawakanPubPage'
import TwezhinawayzanstiPubPage from '../components/TwezhinawayzanstiPubPage'
import InstPublishPubPage from '../components/publicationFolder/InstPublishPubPage'
import SendicateInstPubPage from '../components/publicationFolder/SendicateInstPubPage'

const Publications = () => {

  const navigation=useNavigation()



  return (
    <SafeAreaView className="flex-1 bg-gray-50">
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>



        <View className="flex-row-reverse bg-gray-50 items-end mt-5 ml-5">
           <Image source={assets.blawkrawakanGray} resizeMode='contain' className="h-12 w-12" />
           <Text className="font-[Bold] text-gray-800 text-2xl pt-5 mr-3">بڵاوکراوەکان</Text>
        </View>


<View className="pb-5">




    {/* prsyara bawakn section */}

          <View>
                 <View className="items-end mt-5 mr-8">
                    <Text className="font-[Bold] text-gray-800 text-lg pt-2 mr-3">پرسیارە باوەکان</Text>
                 </View>
            <PrsyarabawakanPubPage/>
            <View className="h-[50] w-[100%] my-2 justify-center items-center">
        <TouchableOpacity
         onPress={()=> navigation.navigate("PrsyarabawakanPage")}
        className="h-[50] w-[170] justify-center items-center rounded-3xl shadow bg-white">
      <Text className="text-gray-500 font-[Bold]">زیاتر ببینە</Text>
     </TouchableOpacity>
        </View>
          </View>


{/* twezhinaway zansti section */}

<View>
                 <View className="items-end mt-5 mr-8">
                    <Text className="font-[Bold] text-gray-800 text-lg pt-2 mr-3">توێژینەوەی زانستی</Text>
                 </View>
            <TwezhinawayzanstiPubPage/>
            <View className="h-[50] w-[100%] my-2 justify-center items-center">
        <TouchableOpacity
         onPress={()=> navigation.navigate("TwezhinawayzanstiPage")}
        className="h-[50] w-[170] justify-center items-center rounded-3xl shadow bg-white">
      <Text className="text-gray-500 font-[Bold]">زیاتر ببینە</Text>
     </TouchableOpacity>
        </View>
          </View>



{/* instruction publish section */}

<View>
                 <View className="items-end mt-5 mr-8">
                    <Text className="font-[Bold] text-gray-800 text-lg pt-2 mr-3">ڕێنماییە یاساییەکان</Text>
                 </View>
            <InstPublishPubPage/>
            <View className="h-[50] w-[100%] my-2 justify-center items-center">
        <TouchableOpacity
         onPress={()=> navigation.navigate("TwezhinawayzanstiPage")}
        className="h-[50] w-[170] justify-center items-center rounded-3xl shadow bg-white">
      <Text className="text-gray-500 font-[Bold]">زیاتر ببینە</Text>
     </TouchableOpacity>
        </View>
          </View>




        {/* Sendicate instruction section */}

<View>
                 <View className="items-end mt-5 mr-8">
                    <Text className="font-[Bold] text-gray-800 text-lg pt-2 mr-3">ڕێنمایی سەندیکا</Text>
                 </View>
            <SendicateInstPubPage/>
            <View className="h-[50] w-[100%] my-2 justify-center items-center">
        <TouchableOpacity
         onPress={()=> navigation.navigate("TwezhinawayzanstiPage")}
        className="h-[50] w-[170] justify-center items-center rounded-3xl shadow bg-white">
      <Text className="text-gray-500 font-[Bold]">زیاتر ببینە</Text>
     </TouchableOpacity>
        </View>
          </View>










          </View>
        </ScrollView>

    </SafeAreaView>
    
  )
}

export default Publications