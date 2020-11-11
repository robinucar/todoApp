import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {todo_input} from '../styles';

const TodoInput = (props) => {
  return (
    <View style={todo_input.container}>
      <View style={todo_input.inputContainer}>
        <TextInput />
      </View>
      <TouchableOpacity style={todo_input.buttonContainer}>
        <Text style={todo_input.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export {TodoInput};
