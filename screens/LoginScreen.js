import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function LoginScreen({ onLogin }) {
  return (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500' }} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.logo}>SoulPet</Text>
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#ccc" />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry placeholderTextColor="#ccc" />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  logo: { fontSize: 40, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: '#1152d4', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});