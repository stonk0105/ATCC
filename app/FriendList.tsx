import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function FriendList() {
  const [checkVisible, setCheckVisible] = useState(false); // 初始為false，確保CheckButton不顯示
  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      {/* 背景全版圖片 */}
      <Image
        source={require('@/assets/images/好友列表.png')}
        style={styles.fullImage}
        resizeMode="cover"
      />

      {/* 返回圖片 */}
      <TouchableOpacity style={styles.circleContainer} onPress={handleBack}>
        <Image
          source={require('@/assets/images/返回.png')} // 換成你自己的圖片
          style={styles.circleImage}
        />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  circleContainer: {
    position: 'absolute',
    bottom: '21%', // 調整上下位置
    right: '0%', // 調整左右位置
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  circleImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
});
