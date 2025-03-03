import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Slot } from "expo-router";


export default function Layout(){
    return <SafeAreaView>
        <Link href={"/"}>
            <Text>Take me to For you page</Text>
        </Link>

        <Link href={"/account"}>
            <Text>Take me to Account page</Text>
        </Link>

        <Link href={"/explore"}>
            <Text>Take me to Explore page</Text>
        </Link>

        <Slot/>
    </SafeAreaView>
}


// slot is similar to childerm , bakhi ka code