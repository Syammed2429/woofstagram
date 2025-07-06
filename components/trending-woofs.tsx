import React from "react";
import { FlatList, Image, View } from "react-native";
import { mockData } from "~/lib/mock-data/mock-data";
import { Text } from "./ui/text";

export const TrendingWoofs = () => {
  return (
    <View className='py-6'>
      <FlatList
        data={mockData?.woofs}
        keyExtractor={(woof) => woof.id.toString()}
        renderItem={({ item: woof }) => (
          <View className='items-center gap-5 p-4 me-4 justify-center bg-white rounded-2xl shadow-2xl h-40 border border-[#e5e7eb] dark:bg-gray-800 dark:border-gray-700'>
            <Image
              source={{ uri: woof.avatar }}
              alt={woof.name}
              className='w-20 h-20 object-cover rounded-full'
            />
            <Text className='text-md font-semibold leading-4 tracking-wider uppercase text-center'>
              {woof.name}
            </Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ width: 16 }} />} // Add spacing at the
      />
    </View>
  );
};
