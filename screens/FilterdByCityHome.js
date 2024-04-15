import { View, Text, SafeAreaView, TouchableOpacity, Image,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import { assets } from '../constants'
import LawyersCard from '../components/LawyersCard'

const FilterdByCityHome = () => {
    const navigation=useNavigation()

    const route = useRoute();
  const selectedCity = route.params?.selectedCity

  





  //----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

const [dbase,setDbase] = useState([])
const [isLoading,setIsLoading] = useState(false)
const [imgUrls, setImgUrls] = useState([]);
const [sendImgUrls, setSendImgUrls] = useState([]);



const fetchData = async()=>{
setIsLoading(true)
try{

const response = await fetch(`http://192.168.1.6:8085/lawyers-fbch?city=${selectedCity}`)
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





//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
        <View className="items-end mx-10 mt-6">

        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={assets.closeXgray} resizeMode='contain' className="h-10 w-10"/>
        </TouchableOpacity>

        </View>



    <View className="mt-4">
        <FlatList
        data={dbase}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item,index})=> <LawyersCard 
        key={item.id.toString()} 
            id={item.id.toString()}
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
            

        />}
        showsVerticalScrollIndicator={false}
        className="pb-60 mb-10"
        />
    </View>

    </SafeAreaView>
  )
}

export default FilterdByCityHome