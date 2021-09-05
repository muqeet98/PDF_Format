//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,Pressable, TextInput } from 'react-native';
import {useSelector,useDispatch  } from 'react-redux';
import {userData } from "../../redux/actions/userdataAction";
import {objectData} from "../../redux/actions/muqeetAction";



// create a component
const index = () => {
   const[email, setEmail] = useState('')
   const[password, setPassword] = useState('')
  const dispatch = useDispatch()
//   const showZia = useSelector((state) => state.userdataReducer.Data_save);
//   const muqeetShow = useSelector((state) => state.muqeetReducer)
//   const data = useSelector((state)=>state.muqeetReducer.data_muqeet)
const data = useSelector((state)=>state.userdataReducer.userData)
const datamuqeet = useSelector((state)=>state.muqeetReducer)
console.log('data',datamuqeet)

  // console.log('showZia',muqeetShow)

  const hanldeSave=()=>{
     data.push({
      email :email,
      password:password,
    })
    dispatch(userData(data))
  }

  const sendData=() =>{
    let obj ={
      name: 'Muqeet',
      email: 'muqeet98'
    }
    dispatch(objectData(obj))

  }

  return (
    <View style={styles.container}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}

        />
      <Pressable onPress={()=>hanldeSave()}>
        <Text>App</Text>
      </Pressable>
      <Pressable onPress={()=>sendData()}>
        <Text>Send Obj</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default index;
