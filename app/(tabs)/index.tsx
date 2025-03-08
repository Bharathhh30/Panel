



import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
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
           <ThemedView style={styles.container}>

            
           <ThemedView style={styles.innerContainer}> 
            <FlatList 
                    data={wallpapers.filter((_,index) => index %2===0)}
                    renderItem={({item})=> <View style={styles.imageContainer}><ImageCard onPress={()=>{
                        setSelectedWallpaper(item)
                    }}
                    wallpaper={item}/></View>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>
           <ThemedView style={styles.innerContainer}> 
           <FlatList 
                    data={wallpapers.filter((_,index) => index %2===1)}
                    renderItem={({item})=> <View style={styles.imageContainer}><ImageCard onPress={()=>{
                        setSelectedWallpaper(item)
                    }}
                    wallpaper={item}/></View>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>     
           </ThemedView>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={()=>setSelectedWallpaper(null)}/>}
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