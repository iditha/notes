import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import navigate from './navigate';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const { width, height } = Dimensions.get('window');


initializeApp(firebaseConfig);
const SignInLayout: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
    const handleSignIn = async () => {
           try {
             await signInWithEmailAndPassword(auth, email, password);
             console.log('User signed in successfully!');
             navigation.navigate('MainPage');
           } catch (error) {
             console.error(error);
             // Handle sign-in errors (e.g., show an error message to the user)
           }
         };
    const handleSignUp = () => {
          navigation.navigate('SignUpPage');
    };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Hello.</Text>
          <Text style={styles.subtitle}>Welcome back</Text>
        </View>
            <Text style={styles.questionText}>Sign In details</Text>
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
                         style={styles.button} onPress={handleSignIn}>
                              <Text style={styles.buttonText}>Log In</Text>
                         </TouchableOpacity>
        <TouchableOpacity style={styles.signUp} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Need an account? Sign Up</Text>
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
  signUp: {
    alignItems: 'center',
    marginTop: '5%',
  },
  signUpText: {
    color: '#9B51E0',
    fontSize: height * 0.02,
  },
});

export default SignInLayout;




