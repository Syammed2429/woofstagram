import React from "react";
import { Image, View, FlatList } from "react-native";
import { Text } from "./ui/text";
import { mockData } from "~/lib/mock-data/mock-data";

export const WoofPosts = () => {
  return (
    <View>
      <Text className='text-xl font-semibold leading-6 tracking-wider my-2'>
        New Woof Posts
      </Text>
      <FlatList
        data={mockData?.posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item: post }) => (
          <View className='flex-row items-center gap-3 my-2 px-2'>
            <View className='w-36 h-24 rounded-lg overflow-hidden items-center justify-center bg-gray-100'>
              <Image
                source={{ uri: post.image }}
                className='w-full h-full'
                resizeMode='cover'
              />
            </View>
            <View className='flex-1 justify-center gap-1.5'>
              <Text className='text-sm font-bold text-[#280D5F] leading-4 tracking-wide uppercase'>
                {post.title}
              </Text>
              <Text className='text-sm text-[#280D5F]'>{post.description}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};
