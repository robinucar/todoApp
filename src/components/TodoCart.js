import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {todoCard} from '../styles';

const TodoCart = ({data}) => {
  return (
    <View style={todoCard.container}>
      <Text style={todoCard.text}>{data.todo}</Text>
    </View>
  );
};

export {TodoCart};
