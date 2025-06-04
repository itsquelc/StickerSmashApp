import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2F4F4F',
      headerStyle: {
        backgroundColor: '#40E0D0'
      },
      headerShadowVisible: false,
      headerTintColor: '#2F4F4F',
      tabBarStyle: {
        backgroundColor: '#40E0D0',
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'ínicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={ focused ? 'home-sharp' : 'home-outline' }
              color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{ 
          title: 'Sobre nós',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={ focused ? 'information-circle' : 'information-circle-outline' }
              color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}