import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { ACTIVE } from "nativewind/dist/utils/selector";



const TabsLayout = () => {
  return (
    <>
      {/* 1 */}
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
     
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84
        }
      }}>
        <Tabs.Screen
          name="home"
          options={{
          
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <>
                <Ionicons name="home" size={28} color={color} />
             
              </>
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
          
             headerShown: false,
            tabBarIcon: ({ color }) => (
              
              <>
              <Feather name="bookmark" size={30} color={color} className="" />
           
              </>
            ),
          }}
        />
         <Tabs.Screen
          name="create"
          options={{
          
             headerShown: false,
            tabBarIcon: ({ color }) => (
              
              <>
              <Ionicons name="create-outline" size={30} color={color} className="" />
            
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
        
             headerShown: false,
            tabBarIcon: ({ color }) => (
              
              <>
              <EvilIcons name="user" size={33} color={color} className="" />
             
              </>
            ),
          }}
        />
      </Tabs>

      {/* 2 */}
    </>
  );
};

export default TabsLayout;
