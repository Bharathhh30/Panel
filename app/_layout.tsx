import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout(){
    return     <GestureHandlerRootView>
        <Slot/>
    </GestureHandlerRootView>

}


// you have to wrap the entire app with gesture handler not just the component