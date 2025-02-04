import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, toggleTask }) {
  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.task}>
      <Text style={[styles.text, task.done && styles.done]}>{task.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: { padding: 215, borderBottomWidth: 1 },
  text: { fontSize: 18 },
  done: { textDecorationLine: 'line-through', color: 'gray' },
});
