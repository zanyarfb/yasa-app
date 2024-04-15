


import { View, Text,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard, Image, FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import axios from 'axios'
import LawyersCard from './LawyersCard'


const SearchOption = () => {

    const navigation=useNavigation()


    const [search,setSearch] = useState('')

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

    const [dbase,setDbase] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [imgUrls, setImgUrls] = useState([]);
  
  
  const fetchData = async(text)=>{
  setIsLoading(true)
  try{
    setSearch(text)
    const response = await fetch(`http://192.168.1.6:8085/lawyers-search-type?name=${text}`)
    const result = await response.json()
  
    setDbase(result)
  
  
    const urls = await Promise.all(
      result.map(async (item) => {
        const imgUrl = await convertBlobToDataUrl(item.profile_img);
        return imgUrl;
      })
    );
  
    setImgUrls(urls);
  
  
  
  
  
  } catch(error){
    console.log("error is"+error)
  }finally{
    setIsLoading(false)
    
  }
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  
  const convertBlobToDataUrl = async (blobData) => {
    try {
      // Convert Buffer data to Uint8Array
      const uint8Array = new Uint8Array(blobData.data);
  
      // Create a Blob from Uint8Array
      const blob = new Blob([uint8Array], { type: blobData.type });
  
      // Convert Blob to data URL
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error converting Blob to data URL:', error);
      return null;
    }
  };





//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------





  return (
    <>
    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                                accessible={false}>
    <View className=" w-full h-full">






    

    

<View className="justify-center items-center flex-row w-full">
    {/* <Text className="font-[Bold] pt-1 text-base">گەڕان</Text> */}


        <View className="w-4/5 h-12  rounded-lg bg-white border-2 text-right border-[#06755d] shadow justify-center items-center flex-row">
        <Image
                    source={assets.searchGreen}
                    resizeMode='contain'
                    className="h-[23px] w-[23px]"
            />
            <TextInput 
                value={search}
                onChangeText={(text)=> fetchData(text)}
                placeholder='ناوی پارێزەرەکە بنووسە'
                className=" h-full w-11/12 font-[Regular] px-3"
            />
        </View>


</View>

<View className="mt-4 pb-16">

    <FlatList
      data={dbase}
      keyExtractor={(item)=> item.id.toString()}
      renderItem={({item,index})=> <LawyersCard 
      key={item.id} 
           id={item.id}
           imgUrl={imgUrls[index]}
           name={item.name}  
           exper={item.experience}
           ofLocation={item.location}
           city={item.city}
           level={item.level}
           degree={item.degree}
           mobile={item.mobile}
           

      />}
      showsVerticalScrollIndicator={false}
      className=" mb-28"
    />





</View>



{/* <View className="items-center mt-96">
    <TouchableOpacity className="bg-[#06755d] mt-9 h-10 w-36 justify-center items-center shadow rounded-lg">
            <Text className="font-[Bold] text-white text-lg pt-1">جێبەجێکردن</Text>
    </TouchableOpacity>
</View> */}








    </View>
    
        </TouchableWithoutFeedback>
    </>
  )
}

export default SearchOption

