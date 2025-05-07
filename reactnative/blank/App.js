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
  const [refreshing, setRefreshing] = useState(false);

  const handleAlert = () => {
    Alert.alert("🚨 Alert", "버튼이 눌렸습니다!");
  };

  const DATA = [
    { title: "Fruits", data: ["🍎 Apple", "🍌 Banana"] },
    { title: "Vegetables", data: ["🥕 Carrot", "🥦 Broccoli"] },
  ];

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
          <Text style={styles.title}>React Native 태그 테스트</Text>

          <Text style={styles.label}>TextInput:</Text>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="search"
            style={styles.input}
          />

          <Text style={styles.label}>Button:</Text>
          <Button title="Alert 띄우기" onPress={handleAlert} />

          <Text style={styles.label}>ActivityIndicator (로딩):</Text>
          <ActivityIndicator size='large' color='red'/>

          <Text style={styles.label}>opacity :</Text>
          <TouchableOpacity style={styles.touch} onPress={handleAlert} activeOpacity={0.5}>
            <Text>ㄴ누르면 투명도 변경</Text>
          </TouchableOpacity>


          <Text style={styles.label}> TouchableHighlight :</Text>
          <TouchableHighlight
            style={styles.touch}
            underlayColor='purple'
            onPress={handleAlert}
          >
            <Text>누르면 색상 변경</Text>
          </TouchableHighlight>

          <Text style={styles.label}>Pressable:</Text>
          <Pressable style={styles.touch} onPress={handleAlert}>
            <Text>누르면 동작</Text>
          </Pressable>
         
          <Text style={styles.label}> FlatList :</Text>
          <FlatList 
            data={["😀", "😎", "🚀"]}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item, i)=> i.toString()}
            horizontal
          />

          <Text style={styles.label}>SectionList:</Text>
          <SectionList 
            sections={DATA}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (<Text style={styles.header}>{title}</Text>)}
          />

          <Text style={styles.label}>Image:</Text>
          <Image 
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: 40, height: 40}}
          />

          <Text style={styles.label}>ImageBackground:</Text>
          <ImageBackground
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: '100%', height: 100, justifyContent: 'center', alignItems: 'center'}}
          >
            <Text style={{color: 'white'}}>배경 위 텍스트</Text>
          </ImageBackground>

          <Text style={styles.label}>TouchableWithoutFeedback:</Text>
          <TouchableWithoutFeedback onPress={()=> Alert.alert('touched@@')}>
              <View style={styles.touch}>
                  <Text>효과없는 터치</Text>
              </View>
          </TouchableWithoutFeedback>

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
