import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TrendingWoofs } from "~/components/trending-woofs";
import { Text } from "~/components/ui/text";
import { WoofPosts } from "~/components/woof-posts";

export default function Screen() {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <View className='flex-1 p-4 '>
        <Text className='text-xl font-semibold '>Trending Woofs</Text>
        <TrendingWoofs />
        <WoofPosts />
      </View>
    </SafeAreaView>
  );
}
