import { Button, Text, View } from "react-native";
import React, { useState , useEffect} from "react";
import { Link } from "expo-router";

export default function () {
    // const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     let interval = setInterval(()=>{
    //         setCount(c=>c+1)
    //     },1000)
    //     return () =>{
    //         clearInterval(interval)
    //     }
    // },[])

    return <View>
        {/* <Text>{count}</Text> */}
        <Text>Hello there</Text>
        {/* <Button onPress={} title="Take me to Foru page"></Button>
        <Button title="Take me to Accounts page"></Button>
        <Button title="Take me to explore page"></Button> */}

        <Link href={"/foryou"}>
            <Text>Take me to For you page</Text>
        </Link>

        <Link href={"/account"}>
            <Text>Take me to Account page</Text>
        </Link>

        <Link href={"/explore"}>
            <Text>Take me to Explore page</Text>
        </Link>
    </View> 
}