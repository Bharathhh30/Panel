import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const theme = useColorScheme() ?? 'light';
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme, headerShown: false  }}>
      <Tabs.Screen
        name="foryou" // This is the name of the screen(file name)
        options={{
          title: 'For You',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bolt" color={color} />,
        }}
      />
      <Tabs.Screen
          name="index"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="xing-square" color={color} />,
          }}
        />
      <Tabs.Screen
        name="account"
        options={{
            title: 'Account',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />,
        }}
      />
        
    </Tabs>
  );
}
