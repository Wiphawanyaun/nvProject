import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { style1 } from '../component/style';

const SecondPage = ({navigation}) => {
  return (
    <View style = {style1.container}>
       <View style = {style1.container}>
    <Text style = {style1.textTopStyle} >
     This is the Second Page
    </Text>
    
    <Button
      title="Go to first page"
      onPress={() => {
        navigation.navigate("First Page");
      }}
    />

    <Button
      title="Go to Third page"
      onPress={() => {
        navigation.navigate("Third Page");
      }}
    />
   
   </View>
<Text style = {style1.textBottomStyle}>
         Thai-Nichi insitute of Technology
        </Text>
        
  </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({})