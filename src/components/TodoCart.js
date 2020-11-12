import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {todoCard} from '../styles';

const TodoCart = (props) => {
  return (
    <TouchableOpacity
      style={todoCard.container}
      onPress={() => props.onDone(props.data.id)}>
      <Text
        style={[
          todoCard.text,
          {textDecorationLine: props.data.isDone ? 'line-through' : null},
        ]}>
        {props.data.todo}
      </Text>
    </TouchableOpacity>
  );
};

export {TodoCart};
