import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import {TouchableOpacity, Text, View } from 'react-native';

const App = () => {
  const childRef = useRef()
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <ChildComponent ref={childRef} />
      <TouchableOpacity
        onPress={() => {
          childRef.current.x()
        }}> 
        <Text> Execute Child Method</Text>
        </TouchableOpacity>
         </View>
  )
}

export default App;

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    sayHi: () => { sayHi() }
 
  }))  

  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    x: () => { x() }
 
  }))


  // internal method
  const sayHi = () => {
    console.log("Hello")
  }
  const x = ()=>{
    console.log("xxxxxx")
  }
  return (
    <View />
  )
})