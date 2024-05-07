import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LawyerData, assets } from '../constants'
import LawyersCard from './LawyersCard'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Lawyer_category from './Lawyer_category'


const LawyersCardHome = () => {

  
  const navigation=useNavigation()
  
  const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [imgUrls, setImgUrls] = useState([]);
  const [sendImgUrls, setSendImgUrls] = useState([]);



const fetchData = async()=>{
setIsLoading(true)
try{
  const response = await fetch('https://api.yasa-app.com/lawyer-home')
  const result = await response.json()

  setDbase(result)


  const urls = await Promise.all(
    result.map(async (item) => {
      const imgUrl = await convertBlobToDataUrl(item.profile_img);
      return imgUrl;
    })
  );

  setImgUrls(urls);


  const Surls = await Promise.all(
    result.map(async (item) => {
      const imgUrl = await convertBlobToDataUrl(item.sendicate_img);
      return imgUrl;
    })
  );

  setSendImgUrls(Surls)





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
  

  return (
    <View className="">
       <View className="mr-5 justify-center h-10 ">
           <Text className="font-[Bold] text-xl text-right h-10 pt-3 text-[#4c4c4c]">پاریزەرەکان</Text>
           </View>

{
  isLoading ? (
    <ActivityIndicator size="large" color="#06755d" />
  ) : (
    <View>
      {
        dbase?.map((item,index)=>{

          
          
        return(
          <View key={item.id}>
          <LawyersCard 
          
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
           sendicateImg={sendImgUrls[index]}
           longitude={item.longitude}
           latitude={item.latitude}
           email={item.email}
           facebook={item.facebook}
           instagram={item.instagram}
           tiktok={item.tiktok}
           linkedin={item.linkedin}
           twitter={item.twitter}
          />
          
         </View>
        )
  
        }
        )
      }

    </View>
  )
}
        <View className="h-[50] w-[100%] my-2 justify-center items-center">
        <TouchableOpacity
         onPress={()=> navigation.navigate("LawyersPage")}
        className="h-[50] w-[170] justify-center items-center rounded-3xl shadow bg-white">
      <Text className="text-gray-500 font-[Bold]">زیاتر ببینە</Text>
     </TouchableOpacity>
        </View>
    </View>
  )
}

export default LawyersCardHome


