import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Text } from "./ui/text";
import { mockData } from "~/lib/mock-data/mock-data";

export const TrendingWoofs = () => {
  return (
    <View className='py-6'>
      <ScrollView horizontal className=''>
        {mockData?.woofs.map((woof) => (
          <View
            key={woof.id}
            className='items-center gap-5 p-4 me-4 justify-center bg-white rounded-2xl shadow-2xl h-40 border border-[#e5e7eb] dark:bg-gray-800 dark:border-gray-700]'
          >
            <Image
              source={{ uri: woof.avatar }}
              alt={woof.name}
              className='w-20 h-20 object-cover rounded-full'
            />
            <Text className='text-md font-semibold leading-4 tracking-wider uppercase text-center'>
              {woof.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
