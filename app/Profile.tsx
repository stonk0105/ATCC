import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function Profile() {
  const [userData, setUserData] = useState<any | null>(null);
  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)');
  };

  useEffect(() => {
    // 模擬載入資料的過程
    const fetchData = () => {
      // 這裡假設資料是從某個地方來的，這裡使用假資料
      setUserData({
        name: 'Cynthia',
        personal_score: 85,
      });
    };
    
    fetchData();
  }, []);

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
          source={require('@/assets/images/返回.png')}
          style={styles.circleImage}
        />
      </TouchableOpacity>

      {/* 顯示姓名與分數 */}
      {userData ? (
        <View style={styles.infoBox}>
          <Text style={styles.labelText}>姓名：{userData.name}</Text>
          <Text style={styles.labelText}>分數：{userData.personal_score}</Text>
        </View>
      ) : (
        <Text style={styles.scoreText}>正在載入資料...</Text>
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
  infoBox: {
    position: 'absolute',
    alignItems: 'flex-start',
    top: 250, // 可視需求微調位置
    left: 60,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black', // 黑色文字
  },
  labelText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 4,
    textAlign: 'center',
  },
  scoreText: {
    position: 'absolute',
    top: 160,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
});
