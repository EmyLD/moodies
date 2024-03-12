import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "tamagui";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Log In",
          tabBarIcon: ({ color }) => <Text>Sam !</Text>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <Text>Sam !</Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Log Out",
          tabBarIcon: ({ color }) => <Text>Hello!</Text>,
        }}
      />
    </Tabs>
  );
}
