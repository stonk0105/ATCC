import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function Profile() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      {/* 背景全版圖片 */}
      <Image
        source={require('@/assets/images/個人資料.png')}
        style={styles.fullImage}
        resizeMode="cover"
      />

      {/* 大頭貼和大頭匡容器 */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('@/assets/images/大頭貼.png')}
          style={styles.avatarImage}
          resizeMode="cover"
        />
      </View>

      {/* 姓名和分數顯示 */}
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>ID：Cynthia</Text>
        <Text style={styles.scoreText}>FDS 分數：85</Text>
      </View>

      {/* 返回圖片 */}
      <TouchableOpacity style={styles.circleContainer} onPress={handleBack}>
        <Image
          source={require('@/assets/images/返回.png')}
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
  avatarContainer: {
    position: 'absolute',
    top: 120,
    left: 120,
    width: 165,
    height: 165,
  },
  avatarImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    //borderRadius: 75,
  },
  infoContainer: {
    position: 'absolute',
    top: 330,
    left: 75,
    alignItems: 'left',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  circleContainer: {
    position: 'absolute',
    bottom: '21%',
    right: '0%',
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
