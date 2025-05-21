import { ThemedView } from '@/components/ThemedView';
import { ResizeMode, Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  const FriendPress = () => {
    router.push('/FriendList');
  };
  const SignPress = () => {
    router.push('/SignPage');
  };
  const ProfilePress = () => {
    router.push('/Profile');
  };
  const QuizPress = () => {
    router.push('/DailyQuiz');
  };

  return (
    <ThemedView style={styles.container}>
      <Video
        source={require('@/assets/images/Comp 1_2.mp4')}
        style={styles.fullImage}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
      />
      
      <TouchableOpacity onPress={FriendPress} style={styles.FriendButton}>
        <Image
          source={require('@/assets/images/好友列表Icon.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={SignPress} style={styles.SignButton}>
        <Image
          source={require('@/assets/images/簽到表.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>

      <Image
        source={require('@/assets/images/大頭匡.png')}
        style={styles.Profile_frame}
      />

      <TouchableOpacity onPress={ProfilePress} style={styles.Profile}>
        <Image
          source={require('@/assets/images/大頭貼.png')}
          style={styles.Profile}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={QuizPress} style={styles.QuizButton}>
        <Text style={styles.quizText}>參加今日測驗</Text>
      </TouchableOpacity>

      {showMessage && <Text style={styles.successText}>成功</Text>}
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
    position: 'absolute',
  },
  FriendButton: {
    position: 'absolute',
    top: 80,
    right: 110,
    width: 75,
    height: 75,
  },
  SignButton: {
    position: 'absolute',
    top: 80,
    right: 30,
    width: 75,
    height: 75,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  Profile_frame: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 170,
    height: 170,
  },
  Profile: {
    position: 'absolute',
    top: 47,
    left: 17,
    width: 85,
    height: 85,
  },
  successText: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  QuizButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  quizText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
