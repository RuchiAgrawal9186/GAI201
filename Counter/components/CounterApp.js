import { useState } from 'react';
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Counter:{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" style={styles.btn1} onPress={increaseCount} />
        <Button title="Decrease" onPress={decreaseCount} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    countText: {
      fontSize: 36,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent:"space-between",
      marginTop: 20,
      width:200
      
    }

  });

export default CounterApp