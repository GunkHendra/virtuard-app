import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function TabIcon({ icon }: any) {
    return (
        <Image source={icon} tintColor="#111A19" className="w-8 h-8" />
    );
}

function HeaderIcon() {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{ paddingTop: 20 + insets.top, paddingHorizontal: 16 }}
            className="bg-background px-4 py-4 flex-row items-center justify-between"
        >
            <TouchableOpacity onPress={() => console.log("Menu pressed")}>
                <Image
                    source={icons.burger}
                    className="w-10 h-10"
                    tintColor="#151312"
                />
            </TouchableOpacity>

            <View className="flex-1 items-center">
                <Image
                    source={images.logo}
                    className="h-8 w-24"
                    resizeMode="contain"
                />
            </View>

            <TouchableOpacity onPress={() => console.log("Profile pressed")}>
                <Image
                    source={images.profilepicture}
                    className="size-10 rounded-full"
                />
            </TouchableOpacity>
        </View>
    );
}

export default function Layout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingTop: 15,
                    paddingBottom: insets.bottom,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FAFAFA"
                },
                headerShown: true,
                header: () => <HeaderIcon />
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: () => (
                        <TabIcon icon={icons.search} />
                    ),
                }}
            />

            <Tabs.Screen
                name="hotspot"
                options={{
                    title: "Hotspot",
                    tabBarIcon: () => (
                        <TabIcon icon={icons.hotspot} />
                    ),
                }}
            />

            <Tabs.Screen
                name="plus"
                options={{
                    title: "Plus",
                    tabBarIcon: () => (
                        <TabIcon icon={icons.plus} />
                    ),
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    tabBarIcon: () => (
                        <TabIcon icon={icons.save} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: () => (
                        <TabIcon icon={icons.person} />
                    ),
                }}
            />
        </Tabs>
    );
}