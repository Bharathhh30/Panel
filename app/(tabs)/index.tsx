



import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { View,Text, Image , StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore(){

    const wallpapers = useWallpapers()
    const [selectedWallpaper,setSelectedWallpaper] = useState<Wallpaper | null>(null)

    return <SafeAreaView style = {{flex:1}}> 
        <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}} 
        headerImage={<Image source = {{uri:wallpapers[0]?.url ?? ""}} style = {{flex:1}} />}>
           <SplitView wallpapers = {wallpapers} />
        </ParallaxScrollView>
        
    </SafeAreaView>
}

//added flex:1 in SafeAreaView and got the header image (before it was not coming )

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : "row",
    },
    innerContainer : {
        flex :1 ,
        padding: 4,
    },
    
    imageContainer : {
        paddingVertical : 10,
    }
})