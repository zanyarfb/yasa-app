// // import { View, Text, Image, ScrollView,TouchableOpacity,FlatList } from 'react-native'
// // import React,{useState,useEffect} from 'react'
// // import { assets } from '../constants'
// // import { useNavigation } from '@react-navigation/native'


// // const CateogoryCity = () => {

// //   const navigation=useNavigation()

// //   const [city,setcity]= useState('')


// //   return (
// //     <View className=" p-4 flex-row item-center space-x-[75px]">
      
// //             <View>
// //                 <TouchableOpacity onPress={()=> navigation.navigate("FilterdByCityHome",)}>
// //             <View className="h-[80px] w-[80px] bg-white items-center justify-center rounded-lg shadow-md">
// //             <Image
// //              source={assets.duhokCateogory}
// //              resizeMode='contain'
// //              className="w-[90px] h-[90px] "
// //             />
            
// //         </View>
// //         </TouchableOpacity>
// //         <Text className="font-[Bold] text-lg pt-3 w-[80px] text-center" >دهۆک</Text>
// //             </View>
      
      
// //             <View>
// //                 <TouchableOpacity>
// //             <View className="h-[80px] w-[80px] bg-white items-center justify-center rounded-lg shadow-md">
// //             <Image
// //              source={assets.slemaniCateogory}
// //              resizeMode='contain'
// //              className="w-[90px] h-[90px] "
// //             />
            
// //         </View>
// //         </TouchableOpacity>
// //         <Text className="font-[Bold] text-lg pt-3 w-[80px] text-center" >سلێمانی</Text>
// //             </View>



// //       <View>
// //         <TouchableOpacity>
// //         <View className="h-[80px] w-[80px] bg-white items-center justify-center rounded-lg shadow-md">
// //             <Image
// //              source={assets.erbilCateogory}
// //              resizeMode='contain'
// //              className="w-[90px] h-[90px] "
// //             />
            
// //         </View>
// //         </TouchableOpacity>
// //         <Text className="font-[Bold] text-lg pt-3 w-[80px] text-center" >هەولێر</Text>
        
// //       </View>


// //     </View>
// //   )
// // }

// // export default CateogoryCity



// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { assets } from '../constants';
// import { useNavigation } from '@react-navigation/native';

// const CategoryCity = () => {
//   const navigation = useNavigation();

//   const cities = [
//     { name: 'دهۆک', image: assets.duhokCateogory },
//     { name: 'سلێمانی', image: assets.slemaniCateogory },
//     { name: 'هەولێر', image: assets.erbilCateogory },
//   ];

//   const handleCityPress = (cityName) => {
//     navigation.navigate("FilterdByCityHome", { selectedCity:cityName });
//   };

//   return (
//     <View className="p-4 flex-row items-center space-x-[75px]">
//       {cities.map((city, index) => (
//         <TouchableOpacity key={index} onPress={() => handleCityPress(city.name)}>
//           <View className="h-[80px] w-[80px] bg-white items-center justify-center rounded-lg shadow-md">
//             <Image
//               source={city.image}
//               resizeMode="contain"
//               className="w-[90px] h-[90px]"
//             />
//           </View>
//           <Text className="font-[Bold] text-lg pt-3 w-[80px] text-center">{city.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default CategoryCity;


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { assets } from '../constants';
import { useNavigation } from '@react-navigation/native';

const CategoryCity = () => {
  const navigation = useNavigation();

  const cities = [
    { name: 'دهۆک', image: assets.duhokCateogory },
    { name: 'سلێمانی', image: assets.slemaniCateogory },
    { name: 'هەولێر', image: assets.erbilCateogory },
  ];

  const handleCityPress = (cityName) => {
    navigation.navigate("FilterdByCityHome", { selectedCity: cityName });
  };

  return (
    <View style={styles.container}>
      {cities.map((city, index) => (
        <TouchableOpacity key={index} onPress={() => handleCityPress(city.name)}>
          <View style={styles.cityContainer}>
            <Image
              source={city.image}
              resizeMode="contain"
              style={styles.cityImage}
            />
          </View>
          <Text style={styles.cityText}>{city.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cityContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cityImage: {
    width: 90,
    height: 90,
  },
  cityText: {
    fontFamily: 'Bold', // Replace with your desired font family
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 3,
    width: 80,
  },
});

export default CategoryCity;
