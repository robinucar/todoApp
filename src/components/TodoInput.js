import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {todo_input} from '../styles';

const TodoInput = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={todo_input.container}>
      <View style={todo_input.inputContainer}>
        <TextInput
          placeholder="Add something to do..."
          onChangeText={(value) => setText(value)}
        />
      </View>
      <TouchableOpacity
        style={todo_input.buttonContainer}
        onPress={() => props.onTodoEnter(text)}>
        <Text style={todo_input.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export {TodoInput};
