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
      id: list.length * list.length,
      todo,
      isDone: false,
    };

    const newArray = [todoElm, ...list];
    setList(newArray);
  };

  const doneTodo = (todoId) => {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id === todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
    setList(newArray);
  };

  const removeTodo = (todoId) => {
    const newArray = [...list];
    const todoIndex = list.findIndex((t) => t.id === todoId);
    newArray.splice(todoIndex, 1);

    setList(newArray);
  };

  const renderTodo = ({item}) => (
    <TodoCart data={item} onDone={(id) => doneTodo(id)} onRemove={removeTodo} />
  );

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">
        <View style={main.container}>
          <View style={main.banner}>
            <Text style={main.todoText}>TODO</Text>
            <Text style={main.todoCount}>
              {list.filter(t => t.isDone === false).length}
            </Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={renderTodo}
            ListEmptyComponent={() => (
              <Text style={main.emptyComponent}>No thing to do...</Text>
            )}
          />

          <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
