import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {main, todo_input} from './styles';
import {TodoInput, TodoCart} from './components';

const App = () => {
  const [list, setList] = useState('');

  const addTodo = (todo) => {
    const todoElm = {
      id: list.length,
      todo,
      isDone: false,
    };

    const newArray = [todoElm, ...list];
    setList(newArray);
  };

  const renderTodo = ({item}) => <TodoCart data={item} />;

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">
        <View style={main.container}>
          <View style={main.banner}>
            <Text style={main.todoText}>TODO</Text>
            <Text style={main.todoCount}>{list.length}</Text>
          </View>

          <FlatList data={list} renderItem={renderTodo} />

          <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
