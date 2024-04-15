import { View, Text,SafeAreaView,TouchableOpacity,Image,ActivityIndicator,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { assets,PrsyaraBawakanData } from '../constants'
import SendicateInstCardsPage from './SendicateInstCardsPage'
import { useNavigation } from '@react-navigation/native'


const SendicateInstPage = () => {
    const navigation=useNavigation()

    const [dbase,setDbase] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [imgUrls, setImgUrls] = useState([]);


  const fetchData = async()=>{
    setIsLoading(true)
    try{
      const response = await fetch('http://192.168.1.8:8085/popular_question-page')
      const result = await response.json()
    
      setDbase(result)
    
    
      const urls = await Promise.all(
        result.map(async (item) => {
          const imgUrl = await convertBlobToDataUrl(item.cover_img);
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







  return (

    <SafeAreaView className="bg-gray-50 flex-1">
      <View className=" items-end mx-5">
      <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 mt-5">
           <Image source={assets.backbuttongreentoright} resizeMode='contain' className="h-10 w-10" />
        </TouchableOpacity>
      </View>

<ScrollView showsVerticalScrollIndicator={false}>

      <View className="items-center mt-9">

      {
  isLoading ? (
    <ActivityIndicator size="large" color="#06755d" />
  ) : (
    <View>
      {
        dbase?.map((item,index)=>{

          // console.log('====================================');
          // console.log(imgUrls[index]);
          // console.log('====================================');
          
        return(
          
          <SendicateInstCardsPage 
          
           key={item.id} 
           id={item.id}
           imgUrl={imgUrls[index]}
           title={item.title}
           paragraph={item.paragraph}
           publisherName={item.publisher_name}
           //publisherImg={item.publisher_img}
           
          />
         
        )
        }
        )
      }

    </View>
  )
}

      </View>

      </ScrollView>


    </SafeAreaView>




   
  )
}

export default SendicateInstPage