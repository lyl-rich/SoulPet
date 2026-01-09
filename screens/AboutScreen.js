import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AboutScreen({ goBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons name="arrow-back" size={28} color="#1152d4" />
        </TouchableOpacity>
        <Text style={styles.title}>Quem Somos</Text>
      </View>

      <ScrollView style={{ padding: 20 }}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1522276492266-9e5647a9d04d?w=500' }} 
          style={styles.aboutImg} 
        />
        <Text style={styles.headline}>Transformando vidas através da adoção.</Text>
        <Text style={styles.text}>
          O SoulPet é um projeto simples criado para ajudar animais de rua a encontrarem uma família.
          Acreditamos que cada pet merece um lar com amor e carinho.
        </Text>
        
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Como ajudar?</Text>
          <Text style={styles.text}>Compartilhe nosso app ou entre em contato para ser um voluntário!</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, gap: 15 },
  title: { fontSize: 22, fontWeight: 'bold' },
  aboutImg: { width: '100%', height: 200, borderRadius: 15, marginBottom: 20 },
  headline: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#1152d4' },
  text: { fontSize: 16, color: '#444', lineHeight: 22 },
  box: { backgroundColor: '#f0f4ff', padding: 20, borderRadius: 15, marginTop: 20 },
  boxTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 }
});