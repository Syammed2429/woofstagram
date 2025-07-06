import * as React from "react";
import { View } from "react-native";
import { TrendingWoofs } from "~/components/trending-woofs";
import { Text } from "~/components/ui/text";

export default function Screen() {
  return (
    <View className='flex-1 px-3'>
      <Text className='text-xl font-semibold '>Trending Woofs</Text>
      <TrendingWoofs />
    </View>
  );
}
