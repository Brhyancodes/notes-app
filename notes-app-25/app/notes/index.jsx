import { useState } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa'
    },
});
export default NoteScreen;