import React, { useState } from 'react';
import {
  Alert,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);
  const [refreshing, setRefreshing] = useState(false);


  let interval

  const startTimer = () => {
    if(!timerDuration){
      Alert.alert('error', '타이머 시간을 설정하세요')
      return
    }
  

  setRemainingTime(timerDuration)
  setIsTimerRunning(true)

  interval = setInterval(() => {
    setRemainingTime((prev) => {
      if(prev <= 0){
        clearInterval(interval)
        setIsTimerRunning(false)
        Alert.alert('time up', '타이머가 종료')
        return 0
      }
      return prev -1
    })
  }, 1000)
}
  
  const stopTimer = () => {
    clearInterval(interval)
    setIsTimerRunning(false)
    setRemainingTime(null)
  }

  const handlInputChange = (value)=> {
    if(!isNaN(value)){
      setInput(value)
      setTimerDuration(parseInt(value, 10) * 60)
    }
  }


  const handleAlert = () => {
    Alert.alert("🚨 Alert", "버튼이 눌렸습니다!");
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 1000);
            }} />
          }
        >
          <Text>Interval Timer</Text>

          <Text style={styles.label}>타이머 설정 (분) : </Text>
          <TextInput 
            style={styles.input}
            value={input}
            onChangeText={handlInputChange}
            keyboardType='numeric'
            placeholder='타이머 시간을 입력하세요'
          />

<View style={styles.buttonContainer}>
            {!isTimerRunning ? (
              <Button title="타이머 시작" onPress={startTimer} />
            ) : (
              <Button title="타이머 중지" onPress={stopTimer} />
            )}
          </View>

          {isTimerRunning && (
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>
                남은 시간: {Math.floor(remainingTime / 60)}:{remainingTime % 60}
              </Text>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  touch: {
    padding: 10,
    backgroundColor: '#eec',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  item: {
    paddingLeft: 10,
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
});
