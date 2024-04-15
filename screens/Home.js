// import { View, Text, SafeAreaView, Image,FlatList,ScrollView, TouchableOpacity } from 'react-native'
// import { useScrollToTop } from '@react-navigation/native'
// import React, { useRef } from 'react'
// import Header from '../components/Header'
// import SearchBar from '../components/SearchBar'
// import CateogoryCity from '../components/CateogoryCity'
// import { assets } from '../constants'
// import CarouselSLiderbox from '../components/CarouselSliderbox'
// import LawyersCardHome from '../components/LawyersCardHome'
// import PrsyaraBawakanHome from '../components/PrsyaraBawakanHome'
// import TwezhinawayzanstyHome from '../components/TwezhinawayzanstyHome'

// const Home = () => {

//   const ScrollViewRef = useRef(null)

//   useScrollToTop(ScrollViewRef);

//   return (
   
//     <SafeAreaView className="flex-1 bg-gray-50" ref={ScrollViewRef}>
//        <Header/>
//       <ScrollView showsVerticalScrollIndicator={false}>
//     <View className="flex-1 pb-20 ">
//        <SearchBar/>
//        <CarouselSLiderbox/>
//        <CateogoryCity/>
//        <LawyersCardHome/>
//        <PrsyaraBawakanHome/>
//        <TwezhinawayzanstyHome/>
//   </View>
  
//     </ScrollView>
//   </SafeAreaView>
    
   
//   )
// }

// export default Home
import React, { useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CateogoryCity from '../components/CateogoryCity';
import CarouselSLiderbox from '../components/CarouselSliderbox';
import LawyersCardHome from '../components/LawyersCardHome';
import PrsyaraBawakanHome from '../components/PrsyaraBawakanHome';
import TwezhinawayzanstyHome from '../components/TwezhinawayzanstyHome';
import { assets } from '../constants';

const Home = () => {
  const ScrollViewRef = useRef(null);
  useScrollToTop(ScrollViewRef);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <ScrollView
        ref={ScrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, paddingBottom: 20 }}>
          
          <SearchBar />
          <CarouselSLiderbox />
          <CateogoryCity />
          <LawyersCardHome />
          <PrsyaraBawakanHome />
          <TwezhinawayzanstyHome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
