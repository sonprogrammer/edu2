import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Toast from 'react-native-toast-message';
import EventEmitter from 'eventemitter3'


const GlobalContext = createContext()
export const globalEvent = new EventEmitter()


export default function App() {
  const [count, setCount] = useState(0);

  const [globalCount, setGlobalCount] = useState(0);


  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  };
  function SomeComponent(props) {

    const [globalCount, setGlobalCount] = useContext(GlobalContext)
    
    return (
      <View>
        <Text style={styles.boldText}>this is SomeComponent</Text>
        <Text style={styles.boldText}>props : {props.count}</Text>
        <Text style={styles.boldText}>GlobalCount : {globalCount}</Text>
        <Button title="button" onPress={(e) =>{setGlobalCount(globalCount+1)}}/>
      <NestedComponent count={props.count}/>
      </View>
    );
  }
  function NestedComponent(props) {
    const [globalCount, setGlobalCount] = useContext(GlobalContext)
    return (
      <View>
        <Text style={styles.boldText}>this is NestedComponent</Text>
        
        <Text style={styles.boldText}>props : {props.count}</Text>
        <Text style={styles.boldText}>GlobalCount : {globalCount}</Text>
      </View>
    );
  }
  function NestedComponent1(props) {
    const [myNum, setMyNum] = useState(0)
    return (
      <View>
        <Text style={styles.boldText}>dsalfgadsg</Text>
        <Text style={styles.boldText}>myNum : {myNum}</Text>
        <Button title="click" onPress={() => setMyNum(myNum+1)}/>
        <Button title="mynum" onPress={() => {
          globalEvent.emit('show toast', myNum)
        }}/>

      </View>
    );
  }

  function EvenNum(props) {
    if(props.isEven){
      return <Text>짝수</Text>
    }return null
  }

  const showToast = (data) => {
    Toast.show({
      type: 'success',
      text1: `data: ${data}`,
      text2: 'This is some something 👋'
    });
  }

  useEffect(() => {
    console.log('useeffect')

    globalEvent.on('show toast', (data) => {
      console.log('data', data)
      showToast(data)
    })

    return() => {
      globalEvent.removeListener('show toast')
    }
  },[]) 


  return (
    <GlobalContext.Provider value={[globalCount, setGlobalCount]}>
    <View style={[styles.container, { backgroundColor: generateColor() }]}>

      <EvenNum isEven={count % 2 === 0}/>
      
      <Text style={styles.boldText}>let's do it</Text>
      <Text style={styles.boldText}>count: {count}</Text>
      <StatusBar style="auto" />
      <Button
        title="i am button"
        onPress={(e) => {
          setCount((v) => v + 1);
        }}
      />
      <Button title="toast 띄우기" onPress={(e) =>showToast(count)}/>
      <SomeComponent count={count} />
      <NestedComponent1 />
    </View>
    <Toast />
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990090",
    alignItems: "center",
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 26,
  },
});
