import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeScreen({ goToDogs, goToCats, goToAbout, goToPet }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SoulPet</Text>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.banner} onPress={goToAbout}>
          <Text style={styles.bannerText}>Conheça nossa missão 🐾</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.catBtn} onPress={goToDogs}>
            <FontAwesome5 name="dog" size={32} color="white" />
            <Text style={styles.catBtnText}>Cães</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.catBtn, {backgroundColor: '#e67e22'}]} onPress={goToCats}>
            <FontAwesome5 name="cat" size={32} color="white" />
            <Text style={styles.catBtnText}>Gatos</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Destaque do dia</Text>
        <TouchableOpacity style={styles.petCard} onPress={goToPet}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400' }} style={styles.petImg} />
          <View style={styles.petInfo}>
            <Text style={styles.petName}>Buddy</Text>
            <Text>Golden Retriever</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', paddingTop: 60 },
  logo: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#1152d4', marginBottom: 20 },
  scroll: { padding: 20 },
  banner: { backgroundColor: '#1152d4', padding: 20, borderRadius: 15, marginBottom: 25 },
  bannerText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  catBtn: { backgroundColor: '#1152d4', width: '48%', padding: 20, borderRadius: 15, alignItems: 'center' },
  catBtnText: { color: 'white', fontWeight: 'bold', marginTop: 5 },
  petCard: { backgroundColor: 'white', borderRadius: 15, overflow: 'hidden', elevation: 3 },
  petImg: { width: '100%', height: 180 },
  petInfo: { padding: 15 },
  petName: { fontSize: 18, fontWeight: 'bold' }
});