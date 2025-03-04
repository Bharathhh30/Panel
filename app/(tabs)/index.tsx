import { Link } from "expo-router";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function foryou(){
    return <SafeAreaView>
        <Link href={"/liked"}>
            <Text>Liked</Text>
        </Link>

        <Link href={"/suggested"}>
            <Text>Suggested</Text>
        </Link>

        <Link href={"/library"}>
            <Text>Library</Text>
        </Link>
        <Text>For You Page</Text>
    </SafeAreaView>
}