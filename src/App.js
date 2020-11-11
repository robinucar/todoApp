import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {main, todo_input} from './styles';
import {TodoInput} from './components';

const App = () => {
  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>10</Text>
        </View>
        <TodoInput onTodoEnter={(todoText) => alert(todoText)} />
      </View>
    </SafeAreaView>
  );
};

export default App;
