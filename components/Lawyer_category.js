// import { View, Text, } from 'react-native'
// import React, {useEffect,useState} from 'react'


// // const CategoryCard = ({lawyer})=>{
// //     return(
        
// //         <View>
// //             {
// //                 lawyer.categories?.map((category,index) =>(
// //                      <View className=" border-2 border-[#06755d] h-[35] mr-4 rounded-md" key={index}>
// //                               <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">{category}</Text>
// //                          </View>
// //                 ))
// //             }
// //         </View>

// //     )
// // }



// const Lawyer_category = () => {
//     const [dbase,setDbase] = useState([])
//     const [category,setCategory] = useState([])
//     const [isLoading,setIsLoading] = useState(false)
    
  
  
//   const fetchData = async()=>{
//   setIsLoading(true)
//   try{
//     const response = await fetch('http://192.168.1.5:8085/lawyer-category')
//     const result = await response.json()
  
//     setDbase(result)
  
   
  
  
  
  
  
//   } catch(error){
//     console.log("error is"+error)
//   }finally{
//     setIsLoading(false)
    
//   }
//   }
  
//   useEffect(()=>{
//     fetchData();
//   },[1])




//   return (
//     <View className="flex-row-reverse h-[70] w-[290]">

//                 {
//                     dbase.categories?.map((id,category)=>{
//                         <View className=" border-2 border-[#06755d] h-[35] mr-4 rounded-md" key={id}>
//                                 <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">{category}</Text>
//                         </View>
//                     })
//                 }

//                                 {/* <View className="border-2 border-[#06755d] h-[35] mr-4 rounded-md">
//                                 <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">قیسام شەرعی</Text>
//                                 </View> */}
                

//                 </View>
//   )
// }

// export default Lawyer_category
// {/* <View className="border-2 border-[#06755d] h-[35] mr-4 rounded-md">
//   <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">کۆمپانیا</Text>
// </View>

// <View className="border-2 border-[#06755d] h-[35] mr-4 rounded-md">
//   <Text className="font-[Bold] text-sm p-[10] h-[30] w-[auto]">قیسام شەرعی</Text>
// </View> */}



// import { View, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const Lawyer_category = () => {
//   const [lawyers, setLawyers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   // console.log('====================================');
//   // console.log(lawyers);
//   // console.log('====================================');

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('http://192.168.1.5:8085/lawyer-category');
//       const result = await response.json();

//       setLawyers(result);
//     } catch (error) {
//       console.log('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <View style={{ flexDirection: 'column', width: 290 }}>
//       {lawyers.map((lawyer) => (
//         <View key={lawyer.lawyer_id}>
//           {/* <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{lawyer.lawyer_name}</Text> */}
//           <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//             {Array.isArray(lawyer.categories)
//               ? lawyer.categories.map((category, index) => (
//                   <View
//                     key={index}
//                     style={{
//                       borderWidth: 2,
//                       borderColor: '#06755d',
//                       height: 35,
//                       marginRight: 4,
//                       marginBottom: 4,
//                       borderRadius: 8,
//                     }}
//                   >
//                     <Text style={{ fontWeight: 'bold', fontSize: 14, padding: 10, height: 30, width: 'auto' }}>
//                       {category}
//                     </Text>
//                   </View>
//                 ))
//               : lawyer.categories.split(',').map((category, index) => (
//                   <View
//                     key={index}
//                     style={{
//                       borderWidth: 2,
//                       borderColor: '#06755d',
//                       height: 35,
//                       marginRight: 4,
//                       marginBottom: 4,
//                       borderRadius: 8,
//                     }}
//                   >
//                     <Text style={{ fontWeight: 'bold', fontSize: 14, padding: 10, height: 30, width: 'auto' }}>
//                       {category}
//                     </Text>
//                   </View>
//                 ))}
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default Lawyer_category;



import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const Lawyer_category = ({ lawyerId }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.yasa-app.com/lawyer-category/${lawyerId}`);
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.log('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lawyerId]);

  return (
    // <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor:"gary" }}>
    <View className="flex-row-reverse h-12 w-80">
      {isLoading ? (
        <Text>Loading categories...</Text>
      ) : (
        categories.map((category, index) => (
          <View
            key={index}
            style={{
              borderWidth: 2,
              borderColor: '#06755d',
              height: 35,
              marginRight: 4,
              marginBottom: 4,
              borderRadius: 8,
            }}
          >
            
            <Text className="font-[Bold] text-sm p-2 h-10 w-[auto]">
              {category.category_type}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Lawyer_category;

