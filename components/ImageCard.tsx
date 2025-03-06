import { Wallpaper } from "@/hooks/useWallpapers";
import { View,Image,StyleSheet,Text } from "react-native";
import { ThemedText } from "./ThemedText";


// takes wallpapers as a input , where the wall papers are of the type Wallpaper
export function ImageCard({wallpaper}:{wallpaper : Wallpaper}){
    return  <View>
        {/* <Image src={{uri: wallpaper.url}} style={{styles.image}} /> */}
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
    </View>
}


const styles = StyleSheet.create({
    image : {
        flex : 1,
        height : 200,
        borderRadius : 10,
    },
    label :{
        backgroundColor : "rgba(0,0,0,0.5)",
        position : "absolute",
        bottom : 0,
        width : "100%",
        color : "white",
        padding : 1,
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10,

        
    }
})