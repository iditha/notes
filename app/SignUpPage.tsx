import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,TextInput, ImageBackground } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Image } from 'react-native';
import navigate from './navigate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';

const { width, height } = Dimensions.get('window');



initializeApp(firebaseConfig);
const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
    const handleBuilt = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
          navigation.navigate('index');
        } catch (error) {
          console.error(error);
          // Handle sign-up errors (e.g., show an error message to the user)
        }
      };
    const handleSignIn = () => {
              navigation.navigate('index');
        };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>enter details</Text>
        </View>
            <Text style={styles.questionText}>details:</Text>
                 <TextInput
                           style={styles.input}
                           placeholder="Email"
                           value={email}
                           onChangeText={(text) => setEmail(text)}
                         />

                         <TextInput
                           style={styles.input}

                           placeholder="Password"
                           secureTextEntry
                           value={password}
                           onChangeText={(text) => setPassword(text)}
                         />
                        <TouchableOpacity
                         style={styles.button} onPress={handleBuilt}>
                              <Text style={styles.buttonText}>Built</Text>
                         </TouchableOpacity>
         <TouchableOpacity style={styles.signIn} onPress={handleSignIn}>
                   <Text style={styles.signInText}>Have an account? Sign in</Text>
                 </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      backgroundColor: '#4285F4',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
  },
  placeholder: {
    width: width * 0.1,
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    marginBottom: '10%',
    width: '100%',
    paddingLeft: '5%',
  },
  title: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  subtitle: {
    fontSize: height * 0.025,
    color: '#666',
    marginBottom: '10%',
  },
  signIn: {
    alignItems: 'center',
    marginTop: '5%',
  },
  signInText: {
    color: '#9B51E0',
    fontSize: height * 0.02,
  },
});

export default SignUpPage;




