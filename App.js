import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,Button,TextInput} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";



function HomeScreen({navigation,route}){
  React.useEffect(() =>{
      if(route.params?.post){
        //Post Updated,do something with 'route.params.post'
      }
  },[route.params?.post])

  return(
    <View style = {{flex:1,alignItems : 'center' , justifyContent :"center"}}>
      <Button title="Create Post"
      onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style = {{margin:10}}>Post: {route.params?.post} </Text>
    </View>

  );

}

function CreatePostScreen({navigation,route}){
  const [postText,setpostText] = React.useState('');
  return(
    // Fragment
    <>
    <TextInput
     multiline
     placeholder="Please text here"
     style = {{height:200,padding:10,backgroundColor:'White'}}
     onChangeText = {setpostText}
     value ={postText}
    />
    <Button
     title="Click"
     onPress={() => {
      // Pass params back to homescreen function
      navigation.navigate('Home',{ post : postText})
     }}
    />
    </>
   

  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle:{backgroundColor : 'lightpink'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold',fontsize:30}
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
