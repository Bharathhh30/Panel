import { Wallpaper } from "@/hooks/useWallpapers";
import { View,Image,StyleSheet,Text, useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "@react-navigation/native";


// takes wallpapers as a input , where the wall papers are of the type Wallpaper
export function ImageCard({wallpaper,onPress}:
    {wallpaper : Wallpaper,
        onPress : ()=>void
    }){
    const theme = useColorScheme() ?? 'light'
    return  <Pressable onPress = {onPress}>
            <View >
            {/* <Image src={{uri: wallpaper.url}} style={{styles.image}} /> */}
            <Image source={{ uri: wallpaper.url }} style={styles.image} />
            <View style={styles.labelContainer}>
                <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                <View style={styles.iconContainer}>
                    <Ionicons name={"heart"} size={18} 
                    color="white" />
                </View>
            </View>
        </View>
    </Pressable>
}


// in order to use the onPress we have to wrap the view with Pressable

const styles = StyleSheet.create({
    image : {
        flex : 1,
        height : 220,
        borderRadius : 20,
    },
    label :{
        
        color : "white",
        
        
    },
    labelContainer : {
        position : "absolute",
        bottom : 0,
        width : "100%",
        backgroundColor : "rgba(0,0,0,0.5)",    
        flexDirection : "row",
        justifyContent : "space-between",
        padding : 5,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    iconContainer : {
        display : "flex",
        justifyContent : "center",
    }
})