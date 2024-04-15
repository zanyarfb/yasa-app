// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import { SliderBox } from 'react-native-image-slider-box'
// import { assets } from '../constants'


// const CarouselSLiderbox = () => {

//     const Slides =[
//         assets.ImageSlider1,
//         assets.ImageSlider2,
//         assets.ImageSlider3,
//         assets.ImageSlider4,
//         assets.ImageSlider5,
//         assets.ImageSlider6,
//     ]


//   return (
//     <View className="flex-1 items-center">
      
//       <SliderBox
        
//         images={Slides}
//         dotColor={"#06755d"}
//         inactiveDotColor={"#4c4c4c"}
//         ImageComponentStyle={{borderRadius:15,width:"90%", marginTop:15,marginBottom:35,}}
//         autoplay
//         circleLoop
        
//       />
      
//     </View>
//   )
// }


// export default CarouselSLiderbox
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { assets } from '../constants';

const CarouselSLiderbox = () => {
  const slides = [
    assets.ImageSlider1,
    assets.ImageSlider2,
    assets.ImageSlider3,
  ];

  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor="#06755d"
        inactiveDotColor="#4c4c4c"
        ImageComponentStyle={styles.imageSlider}
        resizeMode="cover" // or "contain"
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
  },
  imageSlider: {
    borderRadius: 15,
    width: '90%',
    marginTop: 15,
  },
});

export default CarouselSLiderbox;
