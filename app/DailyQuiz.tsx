import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const options = {
  headerShown: false, // 隱藏標頭
};

export default function DailyQuiz() {
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.push('/(tabs)');
  };

  const handleAnswer = (answer: string) => {
    if (answer === 'phishing') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  return (
    <ThemedView style={styles.container}>
      {/* 測驗圖片 */}
      {!showResult && (
        <Image
          source={require('@/assets/images/小測驗.png')}
          style={styles.fullImage}
          resizeMode="cover"
        />
      )}

      {/* 返回圖片 */}
      <TouchableOpacity style={styles.circleContainer} onPress={handleBack}>
        <Image
          source={require('@/assets/images/返回.png')}
          style={styles.circleImage}
        />
      </TouchableOpacity>

      {/* 顯示測驗結果 */}
      {showResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {isCorrect ? '答對了！' : '答錯了！'}
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>返回</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 按鈕區域 */}
      {!showResult && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleAnswer('phishing')}
          >
            <Text style={styles.buttonText}>網路釣魚</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleAnswer('normal')}
          >
            <Text style={styles.buttonText}>正常郵件</Text>
          </TouchableOpacity>
        </View>
      )}
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  backButtonText: {
    color: 'white',
    fontSize: 20,
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
