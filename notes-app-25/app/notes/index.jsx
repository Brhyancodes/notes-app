import { useState } from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Note 1' },
        { id: 2, title: 'Note 2' },
        { id: 3, title: 'Note 3' },
    ]);
    return (
        <View style={styles.container}>
            {/* <Text>Note Screen</Text> */}
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteText}>{item.title}</Text>
                        <Text>{item.content}</Text>
                    </View>
                )}
            
            
            />
             <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  noNotesText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
  },
});
export default NoteScreen;