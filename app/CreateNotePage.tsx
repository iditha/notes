import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const CreateNotePage = () => {

  const [noteText, setNoteText] = useState('');
  const navigation = useNavigation();
  const handleSignOut = () => {
      // Implement your sign-out logic here
      console.log('Signing out...');
      navigation.navigate('index');
    };
  const handleSaveNote = () => {
    // Implement your note saving logic here
    console.log('Note saved:', noteText);
    navigation.navigate('MainPage');
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
            <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
              <Text style={styles.ButtonText}>Sign Out</Text>
            </TouchableOpacity>
       </View>
      <TextInput
        style={styles.noteInput}
        multiline
        placeholder="Write your note here"
        value={noteText}
        onChangeText={setNoteText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.ButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'flex-start', // Align items to the left
      alignItems: 'center',
    },
    signOutButton: {
      marginLeft: '1%',
      height: '12%',
      padding: '5%', // Adjust padding as needed
      alignSelf: 'flex-start',
    },
  noteInput: {
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signOutButton: {
        backgroundColor: '#4285F4',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 20,
      },
});

export default CreateNotePage;