import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'; // 引入StatusBar來隱藏最上方的bar
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function SignPage() {
  const [checkVisible, setCheckVisible] = useState(false); // 初始為false，確保CheckButton不顯示
  const router = useRouter();

  // 顯示成功簽到圖示的函數
  const handleSignIn = () => {
    setCheckVisible(true); // 顯示打勾圖示
  };

  const handleBack = () => {
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      {/* 隱藏最上方的狀態列 */}
      <StatusBar style="light" hidden={true} />

      {/* 背景全版圖片 */}
      <Image
        source={require('@/assets/images/簽到表頁面.png')}
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

      {/* 簽到 */}
      <TouchableOpacity onPress={handleSignIn}>
        <Image
          source={require('@/assets/images/簽到按鈕.png')} // 換成你自己的圖片
          style={styles.SignButton}
        />
      </TouchableOpacity>

      {/* 成功簽到圖片，只有當checkVisible為true時顯示 */}
      {checkVisible && (
        <Image
          source={require('@/assets/images/成功簽到.png')} // 換成你自己的圖片
          style={styles.CheckButton}
        />
      )}
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
  SignButton: {
    position: 'absolute',
    bottom: 130, // 調整上下位置
    alignSelf: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  CheckButton: {
    position: 'absolute',
    top: 335, // 調整上下位置
    alignSelf: 'center',
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
});
