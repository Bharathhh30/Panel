



import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { View,Text, Image , StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore(){

    const wallpapers = useWallpapers()

    return <SafeAreaView style = {{flex:1}}> 
        <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}} 
        headerImage={<Image source = {{uri:wallpapers[0]?.url ?? ""}} style = {{flex:1}} />}>
           <ThemedView style={styles.container}>

            
           <ThemedView style={styles.innerContainer}> 
            <FlatList 
                    data={wallpapers}
                    renderItem={({item})=> <ImageCard wallpaper={item}/>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>
           <ThemedView style={styles.innerContainer}> 
            <FlatList 
                    data={wallpapers}
                    renderItem={({item})=> <ImageCard wallpaper={item}/>}
                    keyExtractor={item => item.name}
                />
            </ThemedView>     
           </ThemedView>
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
        padding: 10,
    }
})