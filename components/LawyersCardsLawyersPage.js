import { View, Text, FlatList,ActivityIndicator } from 'react-native'
import React, { useState, useEffect, Component } from 'react'
 import { LawyerData } from '../constants'
 import LawyersCard from './LawyersCard'
import { Button } from 'react-native'

const LawyersCardsLawyersPage = () => {
 

  const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [imgUrls, setImgUrls] = useState([]);
  const [sendImgUrls, setSendImgUrls] = useState([]);



const fetchData = async()=>{
setIsLoading(true)
try{
  const response = await fetch('https://api.yasa-app.com/lawyer')
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

// console.log(dbase);



  return (
    
    <View>

{
  isLoading ? (
    <ActivityIndicator size="large" color="#06755d" />
  ) : (
    <View>
      {
        dbase?.map((item,index)=>{

          // console.log('====================================');
          // console.log(item.email);
          // console.log('====================================');
          
        return(
          
          <LawyersCard 
          
           key={item.id} 
           id={item.id}
           imgUrl={imgUrls[index]}
           sendicateImg={sendImgUrls[index]}
           name={item.name}  
           exper={item.experience}
           ofLocation={item.location}
           city={item.city}
           level={item.level}
           degree={item.degree}
           mobile={item.mobile}
           longitude={item.longitude}
           latitude={item.latitude}
           email={item.email}
           facebook={item.facebook}
           instagram={item.instagram}
           tiktok={item.tiktok}
           linkedin={item.linkedin}
           twitter={item.twitter}
          />
         
        )
        }
        )
      }

    </View>
  )
}
    </View>
    
  )
}

export default LawyersCardsLawyersPage