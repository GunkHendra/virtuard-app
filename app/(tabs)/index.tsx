import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="mx-5">
        <Text className="text-3xl font-bold">Virtuard</Text>
        <Text className="text-3xl font-bold">Your Virtual Tours</Text>
      </View>
    </SafeAreaView>
  );
}
