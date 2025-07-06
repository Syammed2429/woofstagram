import * as React from "react";
import { View } from "react-native";
import { TrendingWoofs } from "~/components/trending-woofs";
import { Text } from "~/components/ui/text";
import { WoofPosts } from "~/components/woof-posts";

export default function Screen() {
  return (
    <View className='flex-1 p-4'>
      <Text className='text-xl font-semibold '>Trending Woofs</Text>
      <TrendingWoofs />
      <WoofPosts />
    </View>
  );
}
