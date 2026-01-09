import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CatsScreen({ goBack, goToPet }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}><FontAwesome5 name="arrow-left" size={24} color="#e67e22" /></TouchableOpacity>
        <Text style={styles.title}>Gatos para Adoção</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <TouchableOpacity style={styles.card} onPress={() => goToPet({
          name: 'Luna',
          breed: 'Siamês',
          age: '3 anos',
          image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
          history: 'A Luna é uma gata independente mas muito carinhosa quando ganha confiança. Adora dormir ao sol.'
        })}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500' }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.name}>Luna</Text>
            <Text style={[styles.details, {color: '#e67e22'}]}>Siamês • 3 anos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => goToPet({
          name: 'Mingau',
          breed: 'Persa',
          age: '5 meses',
          image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600',
          history: 'O Mingau é um gatinho traquina que adora brincar com fios e bolinhas de lã.'
        })}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500' }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.name}>Mingau</Text>
            <Text style={[styles.details, {color: '#e67e22'}]}>Persa • 5 meses</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, gap: 15 },
  title: { fontSize: 22, fontWeight: 'bold' },
  scroll: { padding: 20 },
  card: { backgroundColor: '#fff5ed', borderRadius: 15, marginBottom: 20, overflow: 'hidden', elevation: 2 },
  img: { width: '100%', height: 200 },
  info: { padding: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  details: { marginTop: 5, fontWeight: '500' }
});