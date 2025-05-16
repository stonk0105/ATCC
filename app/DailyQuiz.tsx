import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function DailyQuiz() {
  const [result, setResult] = useState(''); // 用來顯示結果的狀態
  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)');
  };

  const handleAnswer = (answer) => {
    if (answer === 'phishing') {
      setResult('答對了'); // 網路釣魚的答案是對的
    } else {
      setResult('答錯了'); // 正常郵件的答案是錯的
    }
  };

  return (
    <ThemedView style={styles.container}>
      {/* 測驗圖片 */}
      <Image
        source={require('@/assets/images/小測驗.png')} // 換成你的測驗圖片
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

      {/* 顯示測驗結果 */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* 按鈕區域 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('phishing')}>
          <Text style={styles.buttonText}>網路釣魚</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('normal')}>
          <Text style={styles.buttonText}>正常郵件</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullImage: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
  },
  circleContainer: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  circleImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  resultContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20%',
  },
  resultText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
