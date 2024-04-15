import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import React,{useState,useRef} from 'react'
import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'


const FilterOption = () => {


  const navigation=useNavigation()





  const [selectedCity,SetSelectedCity] = useState('شار هەڵبژێرە')
  const [selectedCategory,SetSelectedCategory] = useState('پسپۆڕی هەڵبژێرە')
  const [selectedGender,SetSelectedGender] = useState('ڕەگەز دیاریبکە')

  //real useSate Data
  const [selectedCityR,SetSelectedCityR] = useState('')
  const [selectedCategoryR,SetSelectedCategoryR] = useState('')
  const [selectedGenderR,SetSelectedGenderR] = useState('')
  

    const cityData=[
        {key:"1",value:"هەولێر"},
        {key:"2",value:"سلێمانی"},
        {key:"3",value:"دهۆک"},
      ]
      const cateogoryData=[
        {key:"1",value:"تەڵاق"},
        {key:"2",value:"کۆمپانیا"},
        {key:"3",value:"قیسام شەرعی"},
      ]
      const genderData=[
        {key:"1",value:"نێر"},
        {key:"2",value:"مێ"},
        
      ]


      const bottomSheetmodalRefCity = useRef(null)
      const bottomSheetmodalRefCateigory = useRef(null)
      const bottomSheetmodalRefGender = useRef(null)

      const snapPoints=["48%","75%"]
  
      function handlePresentModalCity(){
        bottomSheetmodalRefCity.current?.present()
      }

      function handlePresentModalCateogory(){
        bottomSheetmodalRefCateigory.current?.present()
      }


      function handlePresentModalGender(){
        bottomSheetmodalRefGender.current?.present()
      }



      const onSubmit=()=>{
        navigation.navigate("FilterResult",{
          selectedCategoryR,selectedCityR,selectedGenderR
        })
        
      }



      const onReset=()=>{
        SetSelectedCity('شار هەڵبژێرە')
        SetSelectedCategory('پسپۆڕی هەڵبژێرە')
        SetSelectedGender('ڕەگەز دیاریبکە')
        SetSelectedCityR('')
        SetSelectedCategoryR('')
        SetSelectedGenderR('')
      }

      const handleItemPress = (value, setFunctionR,setFunction, ref) => {
        setFunctionR(value);
        setFunction(value);
        ref.current?.close(); // Close the bottom sheet after selecting an item
      };

      const isSubmitDisabled = !(selectedCityR || selectedCategoryR || selectedGenderR);



  return (

    <>
    <TouchableOpacity className="pl-8" onPress={onReset}>
            <Text className="font-[Bold] text-lg text-[#06755d] ">ڕێکخستنەوە</Text>
    </TouchableOpacity>




    <BottomSheetModalProvider>
    <View className="h-[100%]">
    <View className="items-end mx-7">


<View className="mt-5 w-[100%] items-end">
          <Text className="font-[Bold] pt-1 text-base">شوێن</Text>

          <TouchableOpacity
          onPress={handlePresentModalCity}
          className="h-12 w-[90%] mt-2 rounded-lg justify-center bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3">
            <Text className="text-right text-gray-400">{selectedCity}</Text>
          </TouchableOpacity>
</View>

{/* ---------------------------------------------- */}

<View className="mt-5 w-[100%] items-end">
          <Text className="font-[Bold] pt-1 text-base">پسپۆڕی</Text>

          <TouchableOpacity
          onPress={handlePresentModalCateogory}
          className="h-12 w-[90%] mt-2 rounded-lg justify-center bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3">
            <Text className="text-right text-gray-400">{selectedCategory}</Text>
          </TouchableOpacity>
</View>


{/* ---------------------------------------------- */}

<View className="mt-5 w-[100%] items-end">
          <Text className="font-[Bold] pt-1 text-base">ڕەگەز</Text>

          <TouchableOpacity
          onPress={handlePresentModalGender}
          className="h-12 w-[90%] mt-2 rounded-lg justify-center bg-white border-2 text-right border-[#06755d] shadow font-[Regular] px-3">
            <Text className="text-right text-gray-400">{selectedGender}</Text>
          </TouchableOpacity>
</View>





</View>


<View className="items-center mt-20">
    <TouchableOpacity
       disabled={isSubmitDisabled}
       className={`bg-[#06755d] mt-9 h-10 w-36 justify-center items-center shadow rounded-lg ${isSubmitDisabled ? 'opacity-50 bg-gray-500' : ''}`}
       onPress={onSubmit}>
            <Text className="font-[Bold] text-white text-lg pt-1">جێبەجێکردن</Text>
    </TouchableOpacity>
</View>
    </View>
{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}


<BottomSheetModal
                    ref={bottomSheetmodalRefCity}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{borderRadius:30}}
                    style={{backgroundColor:"white",
                    borderRadius:30,
                      shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24,}}
                  >



                    <View className="items-end mt-5">
                      <Text className="font-[Bold] text-lg mr-6 pt-1">شوێنەکەت هەڵبژێرە</Text>
                      <FlatList
                       data={cityData}
                       keyExtractor={item=> item.key}
                       renderItem={({item})=>{
                        return(
                          <View className="mx-8 my-3 bg-white shadow w-28 h-8 rounded-md items-end justify-center">
                            <TouchableOpacity onPress={() => handleItemPress(item.value, SetSelectedCityR,SetSelectedCity, bottomSheetmodalRefCity)}>
                            <Text className="fons-[Bold] text-lg pr-2">{item.value}</Text>
                            </TouchableOpacity>
                            
                          </View>
                        )
                       }}
                      />
                    </View>
            </BottomSheetModal>


{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}


<BottomSheetModal
                    ref={bottomSheetmodalRefCateigory}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{borderRadius:30}}
                    style={{backgroundColor:"white",
                    borderRadius:30,
                      shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24,}}
                  >



                    <View className="items-end mt-5">
                      <Text className="font-[Bold] text-lg mr-6 pt-1">پسپۆڕی دیاریبکە</Text>
                      <FlatList
                       data={cateogoryData}
                       keyExtractor={item=> item.key}
                       renderItem={({item})=>{
                        return(
                          <View className="mx-8 my-3 bg-white shadow w-28 h-8 rounded-md items-end justify-center">
                            <TouchableOpacity onPress={() => handleItemPress(item.value, SetSelectedCategoryR,SetSelectedCategory, bottomSheetmodalRefCateigory)}>
                            <Text className="fons-[Bold] text-lg pr-2">{item.value}</Text>
                            </TouchableOpacity>
                          </View>
                        )
                       }}
                      />
                    </View>
            </BottomSheetModal>






{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}
{/* ---------------------------------------------- */}





<BottomSheetModal
                    ref={bottomSheetmodalRefGender}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{borderRadius:30}}
                    style={{backgroundColor:"white",
                    borderRadius:30,
                      shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24,}}
                  >



                    <View className="items-end mt-5">
                      <Text className="font-[Bold] text-lg mr-6 pt-1">ڕەگەز دیاریبکە</Text>
                      <FlatList
                       data={genderData}
                       keyExtractor={item=> item.key}
                       renderItem={({item})=>{
                        return(
                          <View className="mx-8 my-3 bg-white shadow w-28 h-8 rounded-md items-end justify-center">
                            <TouchableOpacity onPress={() => handleItemPress(item.value, SetSelectedGenderR,SetSelectedGender, bottomSheetmodalRefGender)}>
                            <Text className="fons-[Bold] text-lg pr-2">{item.value}</Text>
                            </TouchableOpacity>
                          </View>
                        )
                       }}
                      />
                    </View>
            </BottomSheetModal>






    </BottomSheetModalProvider>
</>
  )
}

export default FilterOption