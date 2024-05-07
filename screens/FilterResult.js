import { View, Text, SafeAreaView, TouchableOpacity, Image,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../constants'
import LawyersCard from '../components/LawyersCard'


const FilterResult = ({route}) => {

    const navigation=useNavigation()

    const {selectedCityR,selectedCategoryR,selectedGenderR} = route.params

    
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

const [dbase,setDbase] = useState([])
const [isLoading,setIsLoading] = useState(false)
const [imgUrls, setImgUrls] = useState([]);


const fetchData = async()=>{
setIsLoading(true)
try{

const response = await fetch(`https://api.yasa-app.com/lawyers-search-filter?city=${selectedCityR}&gender=${selectedGenderR}&type=${selectedCategoryR}`)
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
    <SafeAreaView className="bg-gray-50 flex-1">

        <View className="items-end mx-10 mt-6">

        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={assets.closeXgray} resizeMode='contain' className="h-10 w-10"/>
        </TouchableOpacity>

        </View>




        <View>
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
       

  />}
  showsVerticalScrollIndicator={false}
  className="pb-60 mb-10"
/>





</View>
        </View>
    </SafeAreaView>
  )
}

export default FilterResult