import { DownloadPicture } from "@/components/BottomSheet";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View,Text, Button, Pressable, useColorScheme, StyleSheet, Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function account(){
    const [pictureOpen,setPictureOpen] = useState(false)
    const theme = useColorScheme() ?? 'light';
    return <SafeAreaView style = {{flex:1 , backgroundColor : theme === "light" ? Colors.light.background : Colors.dark.background}}>
            <Header/>
            <View style = {{flex:1}}>
                <LoginButtons />
                <ThemeSelector />
                <Text style={styles.margin}>Enjoy the high defination
                     WallPapers for Free absolutely ❤️</Text>
            </View>
            
        </SafeAreaView>
}

function LoginButtons(){
    const theme = useColorScheme() ?? 'light';

    return <>
        <AuthButton 
                    label = {"Sign in"}
                    icon = {
                        <Ionicons 
                            name= {"logo-google"}
                            size = {24}
                            // color = {"white"}
                            color = {theme === "light" ? Colors.light.icon : Colors.dark.icon}
                        />
                    }
                />
                <AuthButton 
                    label = {"Sign in"}
                    icon = {
                        <Ionicons 
                            name= {"logo-apple"}
                            size = {24}
                            // color = {"white"}
                            color = {theme === "light" ? Colors.light.icon : Colors.dark.icon}
                        />
                    }
                />
    </>
}

function ThemeSelector(){
    return <View style = {styles.margin}>
        <ThemedText style={styles.textBig}>Settings</ThemedText>
        <ThemedText>Theme</ThemedText>
        <View style = {{flexDirection : "row", justifyContent : "space-between"}}>
            <ThemeButton title = {"Light"} selected = {false} colorScheme={"light"}/>
            <ThemeButton title = {"Dark"} selected = {false} colorScheme={"dark"}/>
            <ThemeButton title = {"System"} selected = {false} colorScheme={null}/>
        </View>
    </View>
}

function ThemeButton({title,selected,colorScheme}:{
    selected : boolean,
    title : string,
    colorScheme : 'light' | 'dark' | null  
}){
    return <Pressable style = {{padding:10,borderColor : "black",borderWidth :1,
        borderRadius : 5,flex : 0.3 
    }}
     onPress={()=>{
        Appearance.setColorScheme(colorScheme)
     }} 
     >
        <ThemedText style = {{width:"100%",textAlign:"center"}}>{title}</ThemedText>
    </Pressable>
}

function Header () {
    return <View style = {styles.topBar}>
        <ThemedText style = {styles.textBig}> 
            Panels
        </ThemedText>
        <ThemedText>
            Sign in to save your data
        </ThemedText>
    </View>
}


function AuthButton({label , icon} : {
    label : String,
    icon : any
}){
    const theme = useColorScheme() ?? 'light';
  return <Pressable style={{
    backgroundColor : "black",
    padding : 10,
    marginHorizontal : 40,
    marginVertical : 5,
    display  : "flex",
    justifyContent : "center",
    flexDirection : "row",
    borderRadius : 10,
  }}>
    {icon}
    <Text style={{
      fontSize : 20,
      color : "white",
      fontWeight : 600,

    }}>
      {label}
    </Text>
  </Pressable>
}

const styles = StyleSheet.create({
    textBig : {
        fontSize : 30,
        fontWeight : "600",
        paddingTop : 10,
    },
    topBar : {
        marginTop : 20,
        padding : 20
    },
    margin : {
        margin : 20
    },
    themeSelectorContainer : {
        flex : 1,
    },
    themeSelectorChild : {
        flex : 0.33
    }
})