// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
// //import Gif from 'react-native-gif';
// import NetInfo from '@react-native-community/netinfo';
// import { assets } from '../constants';
// import Video from 'react-native-video';

// const LoadingScreen = ({ navigation }) => {
//   const [isConnected, setConnected] = useState(true);

//   useEffect(() => {
//     // Check internet connectivity
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setConnected(state.isConnected);
//     });

//     // Simulate some loading time
//     setTimeout(() => {
//       if (isConnected) {
//         // Navigate to the main application
//         navigation.replace('BottomNavigation');
//       } else {
//         // Handle no internet connection
//         console.log('No internet connection');
//         // You can display an error message or retry button here
//       }
//     }, 3000);

//     return () => {
//       unsubscribe();
//     };
//   }, [isConnected, navigation]);

//   return (
//     <View style={styles.container}>
//         <Image source={assets.yasaintro} className="w-full h-full"/>
      
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default LoadingScreen;



import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
//import Gif from 'react-native-gif';
import NetInfo from '@react-native-community/netinfo';
import { assets } from '../constants';

const LoadingScreen = ({ navigation }) => {
  const [isConnected, setConnected] = useState(true);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Check internet connectivity
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });

    // Simulate some loading time
    const loadingTimeout = setTimeout(() => {
      setLoading(false);

      if (isConnected) {
        // Navigate to the main application
        setTimeout(() => {
            navigation.replace('BottomNavigation');
          }, 4000);
      } else {
        // Handle no internet connection
        console.log('No internet connection');
        // You can display an error message or retry button here
      }
    }, 4000);

    return () => {
      clearTimeout(loadingTimeout);
      unsubscribe();
    };
  }, [isConnected, navigation]);

  return (
    <View style={styles.container}>
     <Image source={assets.yasaintro} className="w-full h-full"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
