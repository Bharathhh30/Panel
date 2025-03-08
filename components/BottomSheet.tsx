import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet ,Image, Button, useColorScheme, Pressable} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemedText } from './ThemedText';

export const DownloadPicture = ({onClose,wallpaper}:{
    onClose:()=>void;
    wallpaper : Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
      const theme = useColorScheme() ?? 'light'
  

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        onClose={onClose}
        snapPoints={["99%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
        handleStyle = {{display:"none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
          {/* <Text>Awesome 🎉</Text> */}
          <Image source = {{uri:wallpaper.url}} style = {styles.image} />
            <View style={styles.topbar}>
              
                <Ionicons 
                name={"close"} size={24} 
                color="white" />
              

              <View style={styles.topbarInner}>
                <Ionicons 
                name={"share"} size={24} 
                color="white" />
                <Ionicons 
                name={"heart"} size={24} 
                color="white"/>
              </View>
            </View>
            <View style = {styles.textContainer}>
              <ThemedText style = {styles.text}>{wallpaper.name}</ThemedText>
            </View>
            <DownloadButton/>
        </BottomSheetView>
      </BottomSheet>
  );    
};


// hardcoded as "white" , else it would be like this "{theme === 'light' ? Colors.light.icon : Colors.dark.icon}"

function DownloadButton(){
  return <Pressable style={{
    backgroundColor : "black",
    padding : 10,
    margin : 20,
    display  : "flex",
    justifyContent : "center",
    flexDirection : "row",
    borderRadius : 10,
  }}>
    <Text style={{
      fontSize : 20,
      color : "white",
      fontWeight : 600,

    }}>
      Download
    </Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1, 
  },
  image : {
    height : "60%",
    borderTopRightRadius : 15,
    borderTopLeftRadius : 15,
  },
  topbar : {
    position : "absolute",
    padding : 10,
    display : "flex",
    justifyContent : "space-between",
    flexDirection : "row",
    width : "100%",
  },
  topbarInner : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between",
  },
  textContainer : {
    width : "100%",    
  },
  text : {
    paddingTop : 20,
    textAlign : "center",
    fontSize : 30,
    fontWeight : 600,
  }
});

