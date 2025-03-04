import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout(){
    return     <GestureHandlerRootView>
        {/* <Slot/> */}
        <Stack screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="(nobottombar)/accountinfo" options={{headerShown:true,
                headerTitle : "Account Info",
                headerBackTitle : "Go Back",
            }} />
        </Stack>
    </GestureHandlerRootView>

}

// if we are using stacks from expo router no need to use slot

// you have to wrap the entire app with gesture handler not just the component


// stack lo headershown false pedthe whole app ki false ayipothadi , Stack.Screen use cheste we can enable the header only for that screen

// headerBackTitle wont work for andriod , works only for ios