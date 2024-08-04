import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const MainPage = () => {
const navigation = useNavigation();
const handleSignOut = () => {
      // Implement your sign-out logic here
      console.log('Signing out...');
      navigation.navigate('index');
    };
const handleCreateNote = () => {
      console.log('Create new note...');
      navigation.navigate('CreateNotePage');
    };
const handleManageNote = () => {
      console.log('Manage notes...');
      navigation.navigate('ManageNotes');
    };
  return (
    <View style={styles.container}>
    <View style={styles.header}>
                <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
                  <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
           </View>

      <TouchableOpacity onPress={handleCreateNote} style={styles.button}>
        <Text  style={styles.buttonText}>Create New Note</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleManageNote} style={styles.button}>
        <Text style={styles.buttonText}>Manage Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header:{

    marginLeft: '1%',
    padding: '5%', // Adjust padding as needed
    alignSelf: 'flex-start',
    position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
        zIndex: 1,
  },
  signOutButton: {
      backgroundColor: '#4285F4',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 20,
    },
});

export default MainPage;


