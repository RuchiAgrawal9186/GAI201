import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  CheckBox,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    // Load todos from AsyncStorage when the component mounts
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    // Save todos to AsyncStorage whenever they change
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Modal related state
  const [modalVisible, setModalVisible] = useState(false);
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const handleEdit = (id, text) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
    setModalVisible(true);
  };

  const saveEditedTodo = () => {
    if (editedTodoId !== null && editedTodoText.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editedTodoId ? { ...todo, text: editedTodoText } : todo
        )
      );
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo title..."
          value={todoText}
          onChangeText={setTodoText}
        />
        <Button title="Add" onPress={addTodo} />
      </View>

      <FlatList
        style={styles.todoList}
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <CheckBox
              style={styles.checkBox}
              disabled={false}
              value={item.completed}
              onValueChange={() => toggleCompleted(item.id)}
            />
            <Text style={[styles.todoText, item.completed && styles.completedText]}>
              {item.text}
            </Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id, item.text)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(item.id)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalInput}
              placeholder="Edit todo title..."
              value={editedTodoText}
              onChangeText={setEditedTodoText}
            />
            <View style={styles.modalButtonContainer}>
              <Button title="Save" onPress={saveEditedTodo} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F8FF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  todoList: {
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkBox: {
    marginRight: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007bff',
    borderRadius: 4,
    marginRight: 8,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#dc3545',
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;