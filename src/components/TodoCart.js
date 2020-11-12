import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TodoCart = ({data}) => {
  return (
    <View>
      <Text>{data.todo}</Text>
    </View>
  );
};

export {TodoCart};
