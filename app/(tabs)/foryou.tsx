import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
// paina unnna tab will help us navigate


export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
    </Tab.Navigator>
  );
}



function HomeScreen(){
    return <View>
        <Text>Hi there from Home screen</Text>
    </View>
}

function ProfileScreen(){
    return <View>
        <Text>Hi there from ProfileScreen</Text>
    </View>
}