// import { View, Text, TouchableOpacity,Image } from 'react-native'
// import React,{useState, useEffect} from 'react'
// import { assets } from '../constants'
// import { useNavigation } from '@react-navigation/native'
// import Lawyer_category from './Lawyer_category'

// const LawyersCard = ({name,key,id, imgUrl, city, exper,level,degree,ofLocation,mobile,sendicateImg,longitude,latitude,email,facebook,instagram,tiktok,linkedin,twitter}) => {

 
//   const navigation=useNavigation()
  
//   return (
//       <TouchableOpacity key={id} id={id} onPress={()=>navigation.navigate("LawyerProfile",{
//         name,key,id,imgUrl,city,exper,level,degree,ofLocation,mobile,sendicateImg,longitude,latitude,email,facebook,instagram,tiktok,linkedin,twitter
//       })

      
//       }>
//     <View className="my-2 mx-4 bg-white h-[210] w-[auto] rounded-lg shadow flex-row space-x-5" key={key}>
//         <View className="">
          
//         <View className="h-[120] w-[120] mt-[15] ml-[15] rounded-full">
            
              
            
//                 <Image source={{uri:imgUrl}} resizeMode='contain' className="h-[130] w-[130] rounded-full" />

//         </View>

//         <TouchableOpacity>
//         <View className=" h-[50] w-[50] absolute left-[15] top-[25] "> 
//                 <Image source={assets.fav_icon} className="h-[40] w-[40]" resizeMode='contain' />
//         </View>
//         </TouchableOpacity>
//         </View>
//         <View className=" h-[150] w-[230] items-end">
//                 <View className="h-[50] w-[auto] mt-[5] flex-row items-center">
//                     <Text className="font-[Bold] text-base h-[30] pt-[5] text-center">{name}</Text>
//                     <Image source={assets.lawyer_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
//                 </View>
//                 <View className="h-[50] w-[auto] mt-[0] flex-row items-center">
//                     <Text className="font-[Regular] text-base h-[30] pt-[5] text-center">{exper} ساڵ ئەزموون</Text>
//                     <Image source={assets.experience_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
//                 </View>
//                 <View className="h-[50] w-[auto] mt-[0] flex-row items-center">
//                     <Text className="font-[Regular] text-base h-[30] pt-[5] text-center">{city}</Text>
//                     <Image source={assets.location_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
//                 </View>


//                 <Lawyer_category lawyerId={id}/>
//         </View>
        
//     </View>
//       </TouchableOpacity>
//   )
// }

// export default LawyersCard

import { View, Text, TouchableOpacity,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
import Lawyer_category from './Lawyer_category'

const LawyersCard = ({name,key,id, imgUrl, city, exper,level,degree,ofLocation,mobile,sendicateImg,longitude,latitude,email,facebook,instagram,tiktok,linkedin,twitter}) => {

 
  const navigation=useNavigation()
  
  return (
      <TouchableOpacity key={id} id={id} onPress={()=>navigation.navigate("LawyerProfile",{
        name,key,id,imgUrl,city,exper,level,degree,ofLocation,mobile,sendicateImg,longitude,latitude,email,facebook,instagram,tiktok,linkedin,twitter
      })

      
      }>
    <View className="my-2 mx-4 h-[210] w-[auto] bg-white rounded-lg shadow flex-row space-x-5" key={key}>
        <View className=" flex-1">
          
        <View className="h-28 w-28 mt-[15] ml-[15] rounded-full">
            
              
            
                <Image source={assets.AvatarMan} resizeMode='contain' className=" h-28 w-28 rounded-full" />

        </View>

        <TouchableOpacity>
        <View className=" h-[50] w-[50] absolute left-[15] top-[25] "> 
                <Image source={assets.fav_icon} className="h-[40] w-[40]" resizeMode='contain' />
        </View>
        </TouchableOpacity>
        </View>



        <View className=" h-[150] w-50 items-end">
                <View className="h-[50] w-[auto] mt-[5] flex-row items-center">
                    <Text className="font-[Bold] text-base h-[30] pt-[5] text-center">{name}</Text>
                    <Image source={assets.lawyer_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
                </View>
                <View className="h-[50] w-[auto] mt-[0] flex-row items-center">
                    <Text className="font-[Regular] text-base h-[30] pt-[5] text-center">{exper} ساڵ ئەزموون</Text>
                    <Image source={assets.experience_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
                </View>
                <View className="h-[50] w-[auto] mt-[0] flex-row items-center">
                    <Text className="font-[Regular] text-base h-[30] pt-[5] text-center">{city}</Text>
                    <Image source={assets.location_iconCard} resizeMode='contain' className="h-[50] w-[40]" />
                </View>


                <Lawyer_category lawyerId={id}/>
        </View>
        
    </View>
      </TouchableOpacity>
  )
}

export default LawyersCard

