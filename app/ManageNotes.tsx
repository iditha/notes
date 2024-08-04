import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const ManageNotes = () => {
const navigation = useNavigation();
const handleSignOut = () => {
      // Implement your sign-out logic here
      console.log('Signing out...');
      navigation.navigate('index');
    };
const handleMainPage = () => {
      console.log('Back to MainPage...');
      navigation.navigate('MainPage');
    };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
                <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
                  <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMainPage} style={styles.button}>
                    <Text  style={styles.buttonText}>Main page</Text>
                  </TouchableOpacity>
           </View>



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
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header:{
    flexDirection: 'row',
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

export default ManageNotes;


