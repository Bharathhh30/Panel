import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { View,Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false)
    return <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1}}>
            <Text>Account Page</Text>
            <Button title="Open Bottom sheet" onPress={()=>{
                setPictureOpen(true)    
            }}></Button>
            {pictureOpen && <DownloadPicture onClose={()=>setPictureOpen(false)} />}
            </View>
        </SafeAreaView>
}